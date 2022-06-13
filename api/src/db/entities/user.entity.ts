import {
  Collection,
  Embedded,
  Entity,
  EntityDTO,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
  wrap,
} from "@mikro-orm/core";
import { CustomBaseEntity } from "./base.entity";
import { AvatarImage } from "./avatar-image.entity";
import { Post } from "./post.entity";
import { environment } from "../../config";

@Entity()
export class User extends CustomBaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  @Unique()
  email!: string;

  @Property({ hidden: true })
  password!: string;

  @Enum(() => UserRole)
  role? = UserRole.USER;

  @Embedded(() => AvatarImage)
  avatar? = new AvatarImage();

  @OneToMany(() => Post, (post) => post.author)
  posts = new Collection<Post>(this);

  toJSON(strip = ["password"], ...args: any[]) {
    const o = wrap<User>(this, true).toObject(...args) as EntityDTO<User>;
    o.avatar!.url = `${environment.MEDIA_URL}${o.avatar!.path}`;

    return o;
  }
}

export enum UserRole {
  USER,
  ADMIN,
}
