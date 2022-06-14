import { Button, Stack } from "@mantine/core";
import { InfiniteData } from "react-query";
import { Post } from "../../types/interfaces/post";
import { PostContainer } from "./PostCard/PostContainer";

interface InfinitePostsListProps {
  data: InfiniteData<Post[]>;
  onLoadMore: () => void;
}

export function InfinitePostsList({
  data,
  onLoadMore,
}: InfinitePostsListProps) {
  return (
    <Stack spacing={10}>
      {data.pages.map((page, i) => (
        <Stack spacing={10} key={i}>
          {page.map((post) => (
            <PostContainer post={post} key={post.id} />
          ))}
        </Stack>
      ))}
      <Button onClick={onLoadMore} fullWidth>
        Load more
      </Button>
    </Stack>
  );
}
