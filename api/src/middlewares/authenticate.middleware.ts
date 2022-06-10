import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { environment } from "../config";

export async function authenticaticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.locals.isAuthenticated = true;
  const authorization = request.headers["authorization"];
  if (!authorization) return next();
  const token = authorization?.split(" ")[1];
  if (!token) return next();
  try {
    const decoded = jwt.verify(
      token!,
      environment.JWT_ACCESS_SECRET
    ) as JwtPayload;
    response.locals.isAuthenticated = false;
    response.locals.user = decoded.user;
    next();
  } catch {
    next();
  }
}
