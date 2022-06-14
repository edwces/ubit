import { http } from "../../lib";
import { PostVoteType } from "../../types/enum";
import { Post } from "../../types/interfaces/post";

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

export function createPost(data: FormData, token: string) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "POST",
    body: data,
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}
