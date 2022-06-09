import { Router } from "express";
import { requireAuthentication } from "../../middlewares/require-authentication.middleware";
import { validateBody } from "../../middlewares/validate-body.middleware";
import { validateQuery } from "../../middlewares/validate-query.middleware";
import {
  addVoteToPost,
  createPost,
  getAllPosts,
  checkVoting,
  updatePostVote,
} from "./post.controller";
import { postCreateSchema } from "./schemas/post-create.schema";
import { postVoteSchema } from "./schemas/post-vote.schema";
import { postsSchema } from "./schemas/posts.schema";

export const post = Router();

post.get("/", validateQuery(postsSchema), getAllPosts);
post.post(
  "/",
  requireAuthentication,
  validateBody(postCreateSchema),
  createPost
);
post.post(
  "/:id/vote",
  requireAuthentication,
  validateBody(postVoteSchema),
  addVoteToPost
);
post.put(
  "/:id/vote",
  requireAuthentication,
  validateBody(postVoteSchema),
  updatePostVote
);
post.get("/:id/vote", requireAuthentication, checkVoting);
