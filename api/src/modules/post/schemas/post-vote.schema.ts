import { z } from "zod";
import { PostVoteType } from "../../../db/entities/post-vote.entity";

export const postVoteSchema = z.object({
  type: z.nativeEnum(PostVoteType),
});
