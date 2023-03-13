import { db } from "../db.js"
import bcrypt from "bcrypt";
import { addUserService, getUsersService } from "../services/userService.js";

export const getUsersController = async (_, res) => {
    const data = await getUsersService();
    return res.status(data.status).json(data.data);
};

export const addUserController = async (req, res) => {
    const data = await addUserService(req.body.email, req.body.password)
    return res.status(data.status).json(data.data);
}

export const loginUserController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const qSelect = "SELECT * FROM users WHERE email = ?"

    db.query(qSelect, [email], (err, data) => {
        if (err) {
            res.json(err);
        }
        if (data.length > 0) {
            bcrypt.compare(password, data[0].password, (_errCrypt, result) => {
                if (result) {
                    res.status(200).json({ msg: "Usuário logado com sucesso!" });
                } else {
                    res.status(500).json({ msg: "Usuário ou senha incorreta." });
                }
            })

        } else {
            res.status(500).json({ msg: "Usuário ou senha incorreta." });
        }


    });

}