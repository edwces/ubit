import { useInfiniteQuery } from "react-query";
import { getProfilePosts } from "../../../services/api/profileService";

export function useInfiniteProfilePosts(id: number) {
  return useInfiniteQuery(
    ["profile", "posts", id],
    ({ pageParam }) => getProfilePosts(id, pageParam),
    {
      getNextPageParam: (_, pages) => pages.length + 1,
    }
  );
}
