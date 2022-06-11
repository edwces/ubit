import { Embeddable, Property } from "@mikro-orm/core";

@Embeddable()
export class AvatarImage {
  @Property()
  name?: string = "default.png";

  @Property()
  path?: string = "default-avatar_cltc4f";
}
