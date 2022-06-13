import { Stack } from "@mantine/core";
import { useInfinitePosts } from "./hooks/useInfinitePosts";
import { PostCreator } from "./PostCreator";
import { InfinitePostsList } from "./InfinitePostsList";

export function FeedScrollArea() {
  const { data, fetchNextPage } = useInfinitePosts();

  if (data) {
    console.log(data);

    return (
      <Stack spacing={30}>
        <PostCreator />
        <InfinitePostsList data={data} onLoadMore={fetchNextPage} />
      </Stack>
    );
  }

  return <div>Loading</div>;
}
