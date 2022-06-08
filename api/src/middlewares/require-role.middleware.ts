import { NextFunction, Request, Response } from "express";
import { User } from "../db/entities/user.entity";
import { UserRole } from "../db/entities/user.entity";
import { HttpStatus } from "../types/interfaces";

export const requireRole =
  (role: UserRole) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const loggedInUser = await request.em.findOne(
      User,
      response.locals.user.id
    );
    if (!loggedInUser)
      return response
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "user with that id does not exist" });

    if (loggedInUser.role !== role)
      return response
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Permission denied" });
    next();
  };
