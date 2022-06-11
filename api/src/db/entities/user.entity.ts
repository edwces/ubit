import {
  Collection,
  Embedded,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
} from "@mikro-orm/core";
import { CustomBaseEntity } from "./base.entity";
import { AvatarImage } from "./avatar-image.entity";
import { Post } from "./post.entity";

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
}

export enum UserRole {
  USER,
  ADMIN,
}
