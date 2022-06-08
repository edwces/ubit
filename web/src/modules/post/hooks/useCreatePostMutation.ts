import { useMutation } from "react-query";
import { createPost } from "../../../services/api/postService";
import { PostRequestBody } from "../../../types/interfaces/postRequestBody";

export function useCreatePostMutation() {
  return useMutation((data: PostRequestBody) => createPost(data));
}
