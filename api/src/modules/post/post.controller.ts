import { wrap } from "@mikro-orm/core";
import { Request, Response } from "express";
import { z } from "zod";
import { PostVote, PostVoteType } from "../../db/entities/post-vote.entity";
import { Post } from "../../db/entities/post.entity";
import { User } from "../../db/entities/user.entity";
import { HttpStatus } from "../../types/interfaces";
import { postCreateSchema } from "./schemas/post-create.schema";
import { postVoteSchema } from "./schemas/post-vote.schema";
import { postsSchema } from "./schemas/posts.schema";

export async function getAllPosts(request: Request, response: Response) {
  const { limit = 20, offset = 0 }: z.infer<typeof postsSchema> =
    request.query as any;

  const connection = request.em.getConnection();
  const query = `SELECT "t".*, "t".created_at as "createdAt", to_json("a".*) as "author", CASE WHEN "v".type IS NULL THEN 0 ELSE "v".type END AS "votestatus" FROM post as "t"
                 JOIN "user" as "a" ON "a".id = "t".author_id
                 LEFT JOIN post_vote as "v" ON "v".post_id = "t".id AND "v".voter_id = ?
                 ORDER BY "t".id OFFSET ? LIMIT ?`;
  const posts = await connection.execute(query, [
    response.locals.user.id,
    offset,
    limit,
  ]);

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

export async function checkVoting(request: Request, response: Response) {
  const id = Number.parseInt(request.params.id);

  const vote = await request.em.findOne(PostVote, {
    voter: response.locals.user.id,
    post: id,
  });
  if (!vote)
    return response
      .status(HttpStatus.NOT_FOUND)
      .json({ message: "Vote with that ids was not found" });

  response.status(HttpStatus.OK).json({ vote });
}

export async function updatePostVote(request: Request, response: Response) {
  const id = Number.parseInt(request.params.id);
  const { type }: z.infer<typeof postVoteSchema> = request.body;

  const post = await request.em.findOne(Post, id, { populate: ["author"] });
  let vote = await request.em.findOne(PostVote, {
    voter: response.locals.user.id,
    post: id,
  });
  if (!vote) {
    vote = request.em.create(PostVote, {
      post: id,
      voter: response.locals.user.id,
      type: PostVoteType.NONE,
    });
  }
  const newVoteData = { likes: post!.likes!, dislikes: post!.dislikes! };
  if (vote.type === PostVoteType.LIKE) {
    newVoteData.likes -= 1;
  } else if (vote.type === PostVoteType.DISLIKE) {
    newVoteData.dislikes -= 1;
  }

  if (type === PostVoteType.LIKE) {
    newVoteData.likes += 1;
  } else if (type === PostVoteType.DISLIKE) {
    newVoteData.dislikes += 1;
  }

  wrap(post).assign(newVoteData);
  wrap(vote).assign({ type });

  await request.em.persistAndFlush([post, vote]);

  response.status(HttpStatus.OK).json({ post });
}
