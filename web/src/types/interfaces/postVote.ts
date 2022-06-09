import { PostVoteType } from "../enum";
import { Post } from "./post";
import { User } from "./user";

export interface PostVote {
  id: number;
  voter: User;
  post: Post;
  type: PostVoteType;
  createdAt: string;
  updatedAt: string;
}
