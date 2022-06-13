import { Router } from "express";
import { authenticaticate } from "../../middlewares/authenticate.middleware";
import { validateQuery } from "../../middlewares/validate-query.middleware";
import { postsSchema } from "../post/schemas/posts.schema";
import { getUserProfile, getProfilePosts } from "./profile.controller";

export const profile = Router();

profile.get("/:id", getUserProfile);
profile.get(
  "/:id/posts",
  authenticaticate,
  validateQuery(postsSchema),
  getProfilePosts
);
