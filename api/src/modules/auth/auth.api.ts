import { Router } from "express";
import { registerUser } from "./auth.controller";

export const auth = Router();

auth.get("/register", registerUser);
