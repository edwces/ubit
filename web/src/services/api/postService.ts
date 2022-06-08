import { http } from "../../lib";
import { PostVoteType } from "../../types/enum";
import { Post } from "../../types/interfaces/post";
import { PostRequestBody } from "../../types/interfaces/postRequestBody";

export function getPostsByPage({ pageParam = 0 }): Promise<Post[]> {
  return http
    .get("/posts", { params: { limit: 20, offset: 20 * pageParam } })
    .then((response) => response.data);
}

export function votePost(id: number, type: PostVoteType) {
  return http
    .post(`/posts/${id}/vote`, { type })
    .then((response) => response.data);
}

export function createPost(data: PostRequestBody) {
  return http.post("/posts", data).then((response) => response.data);
}
