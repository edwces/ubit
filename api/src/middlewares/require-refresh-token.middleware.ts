import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../types/interfaces";
import jwt, { JwtPayload } from "jsonwebtoken";
import { environment } from "../config";

export async function requireRefreshToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const refreshToken = request.cookies["refresh_token"];

  if (!refreshToken)
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "refresh token was not send" });

  try {
    const decoded = jwt.verify(
      refreshToken,
      environment.JWT_REFRESH_SECRET
    ) as JwtPayload;
    response.locals.user = decoded.user;
    next();
  } catch {
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "Error validating refresh token" });
  }
}
