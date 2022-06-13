import { Response, Request } from "express";
import { z } from "zod";
import { Post } from "../../db/entities/post.entity";
import { User } from "../../db/entities/user.entity";
import { HttpStatus } from "../../types/interfaces";
import { postsSchema } from "../post/schemas/posts.schema";

export async function getUserProfile(request: Request, response: Response) {
  const id = Number.parseInt(request.params.id);

  const profile = await request.em.findOne(User, id);
  if (!profile)
    response
      .status(HttpStatus.NOT_FOUND)
      .json({ message: "That user does not exists" });

  response.status(HttpStatus.OK).json(profile);
}

export async function getProfilePosts(request: Request, response: Response) {
  const id = Number.parseInt(request.params.id);
  const { limit, offset }: z.infer<typeof postsSchema> = request.query as any;

  const qb = request.em.createQueryBuilder(Post, "p");

  qb.where({ author: { id: { $eq: id } } })
    .select(["p.*"])
    .joinAndSelect("p.author", "a", {});

  if (response.locals.isAuthenticated)
    qb.leftJoin("p.votes", "v", {
      "v.voter": { $eq: response.locals.user.id },
    }).addSelect(
      qb.raw(`CASE WHEN "v".type IS NULL THEN 0 ELSE "v".type END AS "type"`)
    );

  if (limit) qb.limit(limit);

  if (offset) qb.offset(offset);

  const raw = await qb.execute("all");
  const result = raw.map((data: any) => {
    const newData = request.em.map(Post, data);
    newData.voteStatus = data.type ?? 0;
    return newData;
  });

  response.status(HttpStatus.OK).json(result);
}
