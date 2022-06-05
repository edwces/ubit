import { Request, Response } from "express";
import { z } from "zod";
import { User } from "../../db/entities/user.entity";
import { HttpStatus } from "../../types/interfaces";
import { registerSchema } from "./schemas/register.schema";

export async function registerUser(request: Request, response: Response) {
  const { email, password, name }: z.infer<typeof registerSchema> =
    request.body;

  const usersWithSameEmail = await request.em.count(User, { email });
  if (usersWithSameEmail)
    return response
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "user with that email already exist" });

  const user = request.em.create(User, { email, password, name });
  await request.em.persistAndFlush(user);

  response.status(HttpStatus.CREATED).json({ succes: true });
}
