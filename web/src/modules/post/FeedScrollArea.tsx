import { Stack } from "@mantine/core";
import { useInfinitePosts } from "./hooks/useInfinitePosts";
import { PostCreator } from "./PostCreator/PostCreator";
import { InfinitePostsList } from "./InfinitePostsList";
import { useSession } from "../../stores/useSession";

export function FeedScrollArea() {
  const { data, fetchNextPage } = useInfinitePosts();
  const status = useSession((state) => state.status);

  if (data) {
    return (
      <Stack spacing={30}>
        {status === "signIn" ? <PostCreator /> : null}
        <InfinitePostsList data={data} onLoadMore={fetchNextPage} />
      </Stack>
    );
  }

  return <div>Loading</div>;
}
