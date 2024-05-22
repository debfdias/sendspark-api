import { Router } from "express";

import { login } from "../controllers/login";
import { register } from "../controllers/register";
import { list } from "../controllers/user-list";
import { Auth } from "../middlewares/auth";

export const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/list", Auth.private, list);
