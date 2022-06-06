import path from "node:path";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: path.join(__dirname, "../", "../", ".env.local") });

const schema = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/)
    .default("3001")
    .transform((value) => Number.parseInt(value)),
  DB_URL: z.string().url(),
  DB_DEBUG: z
    .union([z.literal("true"), z.literal("false")])
    .default("false")
    .transform((value) => value === "true"),
  JWT_ACCESS_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
});

const result = schema.parse(process.env);

export const environment = result;
