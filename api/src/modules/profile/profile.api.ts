import { Router } from "express";
import { getUserProfile } from "./profile.controller";

export const profile = Router();

profile.get("/:id", getUserProfile);
