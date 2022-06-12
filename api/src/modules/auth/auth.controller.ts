import { Request, Response } from "express";
import { z } from "zod";
import { User } from "../../db/entities/user.entity";
import { HttpStatus } from "../../types/interfaces";
import { loginSchema } from "./schemas/login.schema";
import { registerSchema } from "./schemas/register.schema";
import argon2 from "argon2";
import { environment } from "../../config";
import jwt from "jsonwebtoken";

export async function registerUser(request: Request, response: Response) {
  const { email, password, name }: z.infer<typeof registerSchema> =
    request.body;

  const usersWithSameEmail = await request.em.count(User, { email });
  if (usersWithSameEmail)
    return response
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "user with that email already exist" });

  const hashedPassword = await argon2.hash(password);
  const user = request.em.create(User, {
    email,
    password: hashedPassword,
    name,
  });
  await request.em.persistAndFlush(user);

  response.status(HttpStatus.CREATED).json({ succes: true });
}

export async function loginUser(request: Request, response: Response) {
  const { email, password }: z.infer<typeof loginSchema> = request.body;

  const userWithSameEmail = await request.em.findOne(User, { email });
  if (!userWithSameEmail)
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "user with that email does not exist" });

  const isPasswordValid = await argon2.verify(
    userWithSameEmail.password,
    password
  );
  if (!isPasswordValid)
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "invalid password" });

  const user = {
    email,
    id: userWithSameEmail.id,
    name: userWithSameEmail.name,
  };

  const accessToken = jwt.sign({ user }, environment.JWT_ACCESS_SECRET, {
    expiresIn: 1000 * 60 * 60,
  });
  const refreshToken = jwt.sign(
    { user: { id: userWithSameEmail.id } },
    environment.JWT_REFRESH_SECRET,
    {
      expiresIn: 1000 * 60 * 60 * 60,
    }
  );

  response.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 60,
  });
  response.status(HttpStatus.OK).json({ token: accessToken, user });
}

export async function getNewToken(request: Request, response: Response) {
  const userByRefreshData = await request.em.findOne(
    User,
    response.locals.user.id
  );

  const user = {
    email: userByRefreshData.email,
    name: userByRefreshData.name,
    id: userByRefreshData.id,
  };

  const accessToken = jwt.sign({ user }, environment.JWT_ACCESS_SECRET, {
    expiresIn: 1000 * 60 * 60,
  });

  response.status(HttpStatus.OK).json({ token: accessToken, user });
}

export async function removeRefreshToken(request: Request, response: Response) {
  response.clearCookie("refresh_token");
  response.status(HttpStatus.OK).json({ success: true });
}
