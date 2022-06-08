import { Button, ScrollArea, Stack } from "@mantine/core";
import { useInfinitePosts } from "./hooks/useInfinitePosts";
import { PostsList } from "./PostsList";

export function FeedScrollArea() {
  const { data, fetchNextPage } = useInfinitePosts();

  if (data)
    return (
      <ScrollArea sx={{ height: "90vh", width: "400px" }}>
        <Stack spacing={20}>
          {data.pages.map((posts, i) => (
            <PostsList key={i} data={posts} />
          ))}
        </Stack>
        <Button onClick={() => fetchNextPage()}>Load more</Button>
      </ScrollArea>
    );

  return <div>Loading</div>;
}
