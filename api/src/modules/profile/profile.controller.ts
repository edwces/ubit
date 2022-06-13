import { Response, Request } from "express";
import { User } from "../../db/entities/user.entity";
import { HttpStatus } from "../../types/interfaces";

export async function getUserProfile(request: Request, response: Response) {
  const id = Number.parseInt(request.params.id);

  const profile = await request.em.findOne(User, id);
  if (!profile)
    response
      .status(HttpStatus.NOT_FOUND)
      .json({ message: "That user does not exists" });

  response.status(HttpStatus.OK).json(profile);
}
