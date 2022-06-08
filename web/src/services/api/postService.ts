import { http } from "../../lib";
import { Post } from "../../types/interfaces/post";

export function getPostsByPage({ pageParam = 0 }): Promise<Post[]> {
  return http
    .get("/posts", { params: { limit: 20, offset: 20 * pageParam } })
    .then((response) => response.data);
}
