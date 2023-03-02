import { db } from "../db.js"
import bcrypt from "bcrypt";
const saltRounds = 10;

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";


    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const qSelect = "SELECT * FROM users WHERE email = ?"
    const qInsert = "INSERT INTO users (email, password) VALUES (?, ?)"

    db.query(qSelect, [email], (err, data) => {
        if (err) {
            res.json(err);
        }
        if (data.length === 0) {
            bcrypt.hash(password, saltRounds, (_errCrypt, hash) => {
                db.query(qInsert, [email, hash], (err, _result) => {
                    if (err) {
                        res.json(err);
                    }
                    res.status(200).json({ msg: "Cadastrado com sucesso!" });
                })
            })
        } else {
            res.status(401).json({ msg: "Usuário já cadastrado." });
        }

    });

}

export const loginUser = (req, res) => {
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