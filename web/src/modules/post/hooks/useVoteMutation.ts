import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { votePost } from "../../../services/api/postService";
import { PostVoteType } from "../../../types/enum";
import { Post } from "../../../types/interfaces/post";

// TODO: Use Query Inavlidation Instead ???
export function useVoteMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, type }: { id: number; type: PostVoteType }) => votePost(id, type),
    {
      onSuccess: (updatedPost, { type }) => {
        queryClient.setQueryData<InfiniteData<Post[]>>(
          ["posts", { order: "desc", sort: "likes" }],
          (old) => {
            const newData = {
              pages: old?.pages.map((page) => {
                return page.map((post) =>
                  post.id == updatedPost!.post.id
                    ? { ...updatedPost.post, voteStatus: type }
                    : post
                );
              }),
              pageParams: old?.pageParams,
            } as InfiniteData<Post[]>;
            return newData;
          }
        );
      },
    }
  );
}
