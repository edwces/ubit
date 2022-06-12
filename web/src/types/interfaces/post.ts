import { PostVoteType } from "../enum";
import { User } from "./user";

export interface Post {
  id: number;
  text: string | null;
  media: string | null;
  createdAt: string;
  updatedAt: string;
  author: User;
  likes: number;
  dislikes: number;
  voteStatus: PostVoteType;
}
