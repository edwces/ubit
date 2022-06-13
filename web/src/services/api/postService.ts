import { http } from "../../lib";
import { PostVoteType } from "../../types/enum";
import { Post } from "../../types/interfaces/post";
import { PostRequestBody } from "../../types/interfaces/postRequestBody";

export function getPostsByPage({ pageParam = 0 }): Promise<Post[]> {
  return http
    .get("/posts", { params: { limit: 5, offset: 5 * pageParam } })
    .then((response) => response.data);
}

export function votePost(
  id: number,
  type: PostVoteType
): Promise<{ post: Post }> {
  return http
    .put(`/posts/${id}/vote`, { type })
    .then((response) => response.data);
}

export function createPost(data: PostRequestBody) {
  return http.post("/posts", data).then((response) => response.data);
}
