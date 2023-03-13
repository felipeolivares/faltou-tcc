import { getUserModel, getUsersModel, insertUserModel } from "../models/userModel.js"
import bcrypt from "bcrypt";
const saltRounds = 10;

export const getUsersService = async () => {
    try {
        const data = await getUsersModel();
        return {
            data: data.data,
            status: 200
        };

    } catch (error) {
        return { data: error, status: 500 };
    }

}

export const addUserService = async (email, password) => {
    try {
        const dataUser = await getUserModel(email);
        if (dataUser.data.length === 0) {
            const hash = await new Promise((resolve, reject) => {
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(hash);
                    }
                });
            });
            const dataInsert = await insertUserModel(email, hash)
            return { data: { msg: dataInsert.data }, status: 200 };
        } else {
            return { data: { msg: "Usuário já cadastrado." }, status: 401 };
        }

    } catch (error) {
        return { data: error, status: 500 };
    }
}