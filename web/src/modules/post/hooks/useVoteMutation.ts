import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { votePost } from "../../../services/api/postService";
import { PostVoteType } from "../../../types/enum";
import { Post } from "../../../types/interfaces/post";

export function useVoteMutation(type: PostVoteType) {
  const queryClient = useQueryClient();
  return useMutation(({ id }: { id: number }) => votePost(id, type), {
    onSuccess: (updatedPost) => {
      console.log(updatedPost);

      queryClient.setQueryData<InfiniteData<Post[]>>("posts", (old) => {
        const newData = {
          pages: old?.pages.map((page) => {
            return page.map((post) =>
              post.id == updatedPost!.post.id ? updatedPost.post : post
            );
          }),
          pageParams: old?.pageParams,
        } as InfiniteData<Post[]>;
        console.log(newData);
        return newData;
      });
    },
  });
}
