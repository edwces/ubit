import { Request, Router } from "express";
import { UserRole } from "../../db/entities/user.entity";
import { requireAuthentication } from "../../middlewares/require-authentication.middleware";
import { requireRole } from "../../middlewares/require-role.middleware";
import {
  getLoggedInUser,
  getUserById,
  saveAvatarImage,
} from "./user.controller";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
import path from "node:path";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: (request: Request, file) => {
    const salt = Date.now();
    const filename = `${file.originalname}-${salt}`;
    return {
      folder: "assets",
      public_id: filename,
      format: "png",
      width: 128,
      height: 128,
    };
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 1000 * 1000 * 10 },
  // We check file extension, mimeType
  fileFilter(request, file, callback) {
    const filetypes = /png|jpg|jpeg/;
    const isCorrectMimeType = filetypes.test(file.mimetype);
    const isCorrectFileExtension = filetypes.test(
      path.extname(file.originalname.toLowerCase())
    );
    if (isCorrectMimeType && isCorrectFileExtension) callback(null, true);
    else callback(new Error("Only image files are allowed"));
  },
});
export const user = Router();

user.get("/me", requireAuthentication, getLoggedInUser);
user.post(
  "/me/avatar",
  requireAuthentication,
  upload.single("avatar"),
  saveAvatarImage
);
user.get(
  "/:id",
  requireAuthentication,
  requireRole(UserRole.ADMIN),
  getUserById
);
