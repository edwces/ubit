import { Router } from "express";
import { requireAuthentication } from "../../middlewares/require-authentication.middleware";
import { validateBody } from "../../middlewares/validate-body.middleware";
import { validateQuery } from "../../middlewares/validate-query.middleware";
import { createPost, getAllPosts } from "./post.controller";
import { postCreateSchema } from "./schemas/post-create.schema";
import { postsSchema } from "./schemas/posts.schema";

export const post = Router();

post.get("/", validateQuery(postsSchema), getAllPosts);
post.post(
  "/",
  requireAuthentication,
  validateBody(postCreateSchema),
  createPost
);
