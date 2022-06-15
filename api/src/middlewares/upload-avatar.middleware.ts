import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
import multer from "multer";
import path from "node:path";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: (request: Request, file) => {
    const salt = Date.now();
    const filename = encodeURI(file.originalname);
    const id = `${filename}-${salt}`;
    return {
      folder: "assets",
      public_id: id,
      format: "png",
      width: 128,
      height: 128,
    };
  },
});

export const uploadAvatar = multer({
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
