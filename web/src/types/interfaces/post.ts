import { PostVoteType } from "../enum";
import { User } from "./user";

export interface PostImage {
  path: string;
  url: string;
  name: string;
  domain: string;
}

export interface Post {
  id: number;
  text: string | null;
  media: PostImage | null;
  createdAt: string;
  updatedAt: string;
  author: User;
  likes: number;
  dislikes: number;
  voteStatus: PostVoteType;
}
