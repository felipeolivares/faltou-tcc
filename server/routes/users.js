import express from "express";
import { getUsers, addUser, loginUser } from "../controllers/user.js"

const router = express.Router();

router.get("/register", getUsers);

router.post("/register", addUser);

router.post("/login", loginUser);

export default router;