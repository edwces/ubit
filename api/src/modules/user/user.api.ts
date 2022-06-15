import { Router } from "express";
import { UserRole } from "../../db/entities/user.entity";
import { requireAuthentication } from "../../middlewares/require-authentication.middleware";
import { requireRole } from "../../middlewares/require-role.middleware";
import { uploadAvatar } from "../../middlewares/upload-avatar.middleware";
import {
  getLoggedInUser,
  getUserById,
  saveAvatarImage,
} from "./user.controller";

export const user = Router();

user.get("/me", requireAuthentication, getLoggedInUser);
user.post(
  "/me/avatar",
  requireAuthentication,
  uploadAvatar.single("avatar"),
  saveAvatarImage
);
user.get(
  "/:id",
  requireAuthentication,
  requireRole(UserRole.ADMIN),
  getUserById
);
