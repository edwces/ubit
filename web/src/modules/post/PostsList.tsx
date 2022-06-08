import { Paper, Stack, Text } from "@mantine/core";
import { Post } from "../../types/interfaces/post";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

interface PostsListProps {
  data?: Post[];
}

export function PostsList({ data = [] }: PostsListProps) {
  return (
    <Stack spacing={20}>
      {data.map((post) => (
        <Paper
          component="article"
          key={post.id}
          withBorder
          p={10}
          sx={{ width: "400px" }}
        >
          <Stack spacing={20}>
            <PostHeader
              userName={post.author.name}
              avatarUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              datePosted={post.createdAt}
            />
            <Text size="lg">{post.text}</Text>
            <PostFooter
              likeNumber={3884}
              dislikeNumber={23405}
              postId={post.id}
            />
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}
