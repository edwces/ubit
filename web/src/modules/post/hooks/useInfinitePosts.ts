import { useInfiniteQuery } from "react-query";
import { getPostsByPage } from "../../../services/api/postService";

export function useInfinitePosts(order = "desc", sort = "likes") {
  return useInfiniteQuery(
    ["posts", { order, sort }],
    ({ pageParam }) => getPostsByPage({ pageParam, order, sort }),
    {
      getNextPageParam: (_, pages) => pages.length + 1,
    }
  );
}
