import { Entity, Enum, ManyToOne, PrimaryKey, Unique } from "@mikro-orm/core";
import { CustomBaseEntity } from "./base.entity";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity()
@Unique({ properties: ["post", "voter"] })
export class PostVote extends CustomBaseEntity {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Post)
  post!: Post;

  @Enum(() => PostVoteType)
  type!: PostVoteType;

  @ManyToOne(() => User)
  voter!: User;
}

export enum PostVoteType {
  DISLIKE = -1,
  LIKE = 1,
  NONE = 0,
}
