import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../types/interfaces";
import jwt, { JwtPayload } from "jsonwebtoken";
import { environment } from "../config";

export async function requireAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authorization = request.headers["authorization"];
  if (!authorization)
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "authorization header was not send or is empty" });

  const token = authorization?.split(" ")[1];
  if (!token)
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "access token was not send in authorization header" });

  try {
    const decoded = jwt.verify(
      token!,
      environment.JWT_ACCESS_SECRET
    ) as JwtPayload;
    response.locals.user = decoded.user;
    next();
  } catch {
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "access token is invalid" });
  }
}
