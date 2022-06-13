import { Embeddable, Property } from "@mikro-orm/core";

@Embeddable()
export class AvatarImage {
  @Property()
  name = "default.png";

  @Property()
  path = "default-avatar_cltc4f";

  @Property({ persist: false })
  url!: string;
}
