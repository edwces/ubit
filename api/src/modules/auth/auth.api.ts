import { Router } from "express";
import { requireRefreshToken } from "../../middlewares/require-refresh-token.middleware";
import { validateBody } from "../../middlewares/validate-body.middleware";
import {
  getNewToken,
  loginUser,
  registerUser,
  removeRefreshToken,
} from "./auth.controller";
import { loginSchema } from "./schemas/login.schema";
import { registerSchema } from "./schemas/register.schema";

export const auth = Router();

auth.post("/register", validateBody(registerSchema), registerUser);
auth.post("/login", validateBody(loginSchema), loginUser);
auth.get("/token", requireRefreshToken, getNewToken);
auth.post("/logout", requireRefreshToken, removeRefreshToken);
