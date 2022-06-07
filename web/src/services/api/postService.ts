import { http } from "../../lib";
import { Post } from "../../types/interfaces/post";

export function getPostsByPage({ pageParam = 0 }): Promise<Post[]> {
  let offset = undefined;
  if (pageParam !== 0) {
    offset = 20 * pageParam;
  }

  return http
    .get("/posts", { params: { limit: 20, offset } })
    .then((response) => response.data);
}
