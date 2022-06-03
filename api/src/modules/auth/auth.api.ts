import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { registerUser } from "./auth.controller";
import { registerSchema } from "./schemas/register.schema";

export const auth = Router();

auth.post("/register", validate(registerSchema), registerUser);
