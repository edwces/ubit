import { Router } from "express";
import { authenticaticate } from "../../middlewares/authenticate.middleware";
import { requireAuthentication } from "../../middlewares/require-authentication.middleware";
import { uploadImage } from "../../middlewares/upload-image.middleware";
import { validateBody } from "../../middlewares/validate-body.middleware";
import { validateQuery } from "../../middlewares/validate-query.middleware";
import {
  createPost,
  getAllPosts,
  checkVoting,
  updatePostVote,
} from "./post.controller";
import { postCreateSchema } from "./schemas/post-create.schema";
import { postVoteSchema } from "./schemas/post-vote.schema";
import { postsSchema } from "./schemas/posts.schema";

export const post = Router();

post.get("/", authenticaticate, validateQuery(postsSchema), getAllPosts);
post.post(
  "/",
  requireAuthentication,
  validateBody(postCreateSchema),
  uploadImage.single("media"),
  createPost
);
post.put(
  "/:id/vote",
  requireAuthentication,
  validateBody(postVoteSchema),
  updatePostVote
);
post.get("/:id/vote", requireAuthentication, checkVoting);
