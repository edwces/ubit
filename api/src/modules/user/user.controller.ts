import { wrap } from "@mikro-orm/core";
import cloudinary from "cloudinary";
import { Request, Response } from "express";
import { environment } from "../../config";
import { User } from "../../db/entities/user.entity";
import { HttpStatus } from "../../types/interfaces";

export async function getLoggedInUser(request: Request, response: Response) {
  const loggedInUser = await request.em.findOne(User, response.locals.user.id);

  if (!loggedInUser)
    return response
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "user with that id does not exist" });

  response.status(HttpStatus.OK).json(loggedInUser);
}

export async function getUserById(request: Request, response: Response) {
  const id = Number.parseInt(request.params.id);

  const user = await request.em.findOne(User, id);

  if (!user)
    return response
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "user with that id does not exist" });

  response.status(HttpStatus.OK).json(user);
}

export async function saveAvatarImage(request: Request, response: Response) {
  const loggedInUser = await request.em.findOne(
    User,
    response.locals.user.id as number
  );
  if (loggedInUser?.avatar?.name !== "default.png") {
    cloudinary.v2.uploader.destroy(loggedInUser?.avatar?.path as string);
  }

  wrap(loggedInUser).assign({
    avatar: {
      path: request.file!.filename,
      name: request.file!.originalname,
    },
  });

  await request.em.flush();
  response.status(HttpStatus.OK).json({ success: true });
}
