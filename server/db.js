import mysql from "mysql"

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tcc123",
    database: "banco"
})