import { Router } from "express";
import { requireRefreshToken } from "../../middlewares/require-refresh-token.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { getNewToken, loginUser, registerUser } from "./auth.controller";
import { loginSchema } from "./schemas/login.schema";
import { registerSchema } from "./schemas/register.schema";

export const auth = Router();

auth.post("/register", validate(registerSchema), registerUser);
auth.post("/login", validate(loginSchema), loginUser);
auth.get("/token", requireRefreshToken, getNewToken);
