import { QueryOrder } from "@mikro-orm/core";
import { z } from "zod";

export const postsSchema = z
  .object({
    limit: z
      .string()
      .regex(/^\d+$/)
      .transform((value) => Number.parseInt(value)),
    offset: z
      .string()
      .regex(/^\d+$/)
      .transform((value) => Number.parseInt(value)),
    sort: z.string(),
    order: z.nativeEnum(QueryOrder),
  })
  .partial();
