import { Stack, Text } from "@mantine/core";
import { Post } from "../../types/interfaces/post";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostLayout } from "./PostLayout";

interface PostsListProps {
  data?: Post[];
}

export function PostsList({ data = [] }: PostsListProps) {
  return (
    <Stack spacing={20}>
      {data.map((post) => (
        <PostLayout key={post.id}>
          <PostHeader
            userName={post.author.name}
            avatarUrl={post.author.avatar.url}
            datePosted={post.createdAt}
          />
          <Text size="lg">{post.text}</Text>
          <PostFooter
            postId={post.id}
            dislikes={post.dislikes}
            likes={post.likes}
            voteStatus={post.voteStatus}
          />
        </PostLayout>
      ))}
    </Stack>
  );
}
