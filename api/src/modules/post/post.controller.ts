import { Request, Response } from "express";
import { z } from "zod";
import { Post } from "../../db/entities/post.entity";
import { User } from "../../db/entities/user.entity";
import { HttpStatus } from "../../types/interfaces";
import { postCreateSchema } from "./schemas/post-create.schema";
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

export async function createPost(request: Request, response: Response) {
  const { authorId, text }: z.infer<typeof postCreateSchema> = request.body;

  const doesUserExist = await request.em.count(User, { id: authorId });
  if (!doesUserExist)
    return response
      .status(HttpStatus.BAD_REQUEST)
      .send({ message: "This author does not exist" });

  const post = request.em.create(Post, { author: authorId, text });
  await request.em.persistAndFlush(post);

  response.status(HttpStatus.CREATED).json({ success: true });
}
