import { Stack } from "@mantine/core";
import { Post } from "../../types/interfaces/post";
import { PostContainer } from "./PostContainer";

interface PostsListProps {
  data?: Post[];
}

export function PostsList({ data = [] }: PostsListProps) {
  return (
    <Stack spacing={20}>
      {data.map((post) => (
        <PostContainer post={post} key={post.id} />
      ))}
    </Stack>
  );
}
