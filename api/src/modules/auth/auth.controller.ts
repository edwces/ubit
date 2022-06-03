import { Request, Response } from "express";
import { HttpStatus } from "../../types/interfaces";

export function registerUser(request: Request, response: Response) {
  response.status(HttpStatus.CREATED).json({ succes: true });
}
