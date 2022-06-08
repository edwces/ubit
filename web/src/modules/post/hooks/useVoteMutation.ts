import { useMutation } from "react-query";
import { votePost } from "../../../services/api/postService";
import { PostVoteType } from "../../../types/enum";

export function useVoteMutation(type: PostVoteType) {
  return useMutation(({ id }: { id: number }) => votePost(id, type));
}
