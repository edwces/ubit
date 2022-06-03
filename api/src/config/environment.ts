import path from "node:path";
import dotenv from "dotenv";
import joi from "joi";
import { AppEnvironment } from "../types/interfaces";

dotenv.config({ path: path.join(__dirname, "../", "../", ".env.local") });

const schema = joi
  .object<AppEnvironment>({
    PORT: joi.number().default(3001),
  })
  .unknown();

const result = schema.validate(process.env);

if (result.error)
  throw new Error(`Environment Variables Validation error: ${result.error}`);

export const environment = result.value!;
