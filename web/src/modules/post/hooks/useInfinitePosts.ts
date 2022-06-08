import { useInfiniteQuery } from "react-query";
import { getPostsByPage } from "../../../services/api/postService";

export function useInfinitePosts() {
  return useInfiniteQuery(
    "posts",
    ({ pageParam }) => getPostsByPage({ pageParam }),
    {
      getNextPageParam: (_, pages) => pages.length + 1,
    }
  );
}
