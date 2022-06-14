import { Embeddable, Property } from "@mikro-orm/core";

@Embeddable()
export class PostImage {
  @Property()
  name!: string;

  @Property()
  path!: string;

  @Property({ persist: false })
  url!: string;
}
