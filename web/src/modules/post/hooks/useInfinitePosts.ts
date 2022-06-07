import { useInfiniteQuery } from "react-query";
import { getPostsByPage } from "../../../services/api/postService";

export function useInfinitePosts() {
  return useInfiniteQuery("posts", () => getPostsByPage({}), {
    getNextPageParam: (_, pages) => pages.length + 1,
  });
}
