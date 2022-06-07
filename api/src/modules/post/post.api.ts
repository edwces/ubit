import { Router } from "express";
import { validateQuery } from "../../middlewares/validate-query.middleware";
import { getAllPosts } from "./post.controller";
import { postsSchema } from "./schemas/posts.schema";

export const post = Router();

post.get("/", validateQuery(postsSchema), getAllPosts);
