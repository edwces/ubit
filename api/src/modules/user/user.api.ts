import { Router } from "express";
import { UserRole } from "../../db/entities/user.entity";
import { requireAuthentication } from "../../middlewares/require-authentication.middleware";
import { requireRole } from "../../middlewares/require-role.middleware";
import { getLoggedInUser, getUserById } from "./user.controller";

export const user = Router();

user.get("/me", requireAuthentication, getLoggedInUser);
user.get(
  "/:id",
  requireAuthentication,
  requireRole(UserRole.ADMIN),
  getUserById
);
