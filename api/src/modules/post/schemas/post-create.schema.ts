import { z } from "zod";

export const postCreateSchema = z.object({
  authorId: z.number().positive(),
  text: z.string().optional(),
});
