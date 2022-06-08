import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { CustomBaseEntity } from "./base.entity";
import { PostVote } from "./post-vote.entity";
import { User } from "./user.entity";

@Entity()
export class Post extends CustomBaseEntity {
  @PrimaryKey()
  id!: number;

  @Property({ columnType: "text", nullable: true })
  text?: string;

  @Property({ nullable: true })
  media?: string;

  @OneToMany(() => PostVote, (postVote) => postVote.post)
  votes = new Collection<PostVote>(this);

  @Property()
  likes?: number = 0;

  @Property()
  dislikes?: number = 0;

  @ManyToOne(() => User)
  author!: User;
}
