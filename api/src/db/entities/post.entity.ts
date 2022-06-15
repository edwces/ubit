import {
  Collection,
  Embedded,
  Entity,
  EntityDTO,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  wrap,
} from "@mikro-orm/core";
import { environment } from "../../config";
import { CustomBaseEntity } from "./base.entity";
import { PostImage } from "./post-image.entity";
import { PostVote } from "./post-vote.entity";
import { User } from "./user.entity";
import cloudinary from "cloudinary";

@Entity()
export class Post extends CustomBaseEntity {
  @PrimaryKey()
  id!: number;

  @Property({ columnType: "text", nullable: true })
  text?: string;

  @Embedded(() => PostImage, { nullable: true })
  media?: PostImage;

  @OneToMany(() => PostVote, (postVote) => postVote.post)
  votes = new Collection<PostVote>(this);

  @Property()
  likes?: number = 0;

  @Property()
  dislikes?: number = 0;

  @Property({ persist: false })
  voteStatus?: number = 0;

  @ManyToOne(() => User)
  author!: User;

  toJSON(strip = [], ...args: any[]) {
    const o = wrap<Post>(this, true).toObject(...args) as EntityDTO<Post>;
    if (this.media) {
      o.media!.url = cloudinary.v2.url(o.media!.path, { width: 400 });
    }
    return o;
  }
}
