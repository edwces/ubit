import { Request, Response } from "express";
import { z } from "zod";
import { Post } from "../../db/entities/post.entity";
import { HttpStatus } from "../../types/interfaces";
import { postsSchema } from "./schemas/posts.schema";

export async function getAllPosts(request: Request, response: Response) {
  const { limit, offset }: z.infer<typeof postsSchema> = request.query as any;
  const qb = request.em.createQueryBuilder(Post).select("*");

  if (limit) {
    qb.limit(limit);
  }
  if (offset) {
    qb.offset(offset);
  }
  const posts = await qb.getResult();

  response.status(HttpStatus.OK).json(posts);
}
