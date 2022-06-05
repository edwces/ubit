import { Entity, Enum, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { CustomBaseEntity } from "./base.entity";

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
  role = UserRole.USER;

  @Property()
  avatar?: string = "";
}

export enum UserRole {
  USER,
  ADMIN,
}
