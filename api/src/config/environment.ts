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
});

const result = schema.parse(process.env);

export const environment = result;
