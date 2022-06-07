import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";
import { HttpStatus } from "../types/interfaces";

export const validateBody =
  (schema: ZodSchema) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      schema.parse(request.body);
      next();
    } catch (error) {
      if (error instanceof ZodError)
        response.status(HttpStatus.BAD_REQUEST).json(error.issues);
    }
  };
