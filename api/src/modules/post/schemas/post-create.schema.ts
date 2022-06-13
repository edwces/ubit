import { z } from "zod";

export const postCreateSchema = z.object({
  text: z.string().optional(),
});
