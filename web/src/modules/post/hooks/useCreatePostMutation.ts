import { useMutation } from "react-query";
import { createPost } from "../../../services/api/postService";

export function useCreatePostMutation() {
  return useMutation(({ data, token }: { data: FormData; token: string }) =>
    createPost(data, token)
  );
}
