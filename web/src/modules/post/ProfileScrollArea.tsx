import { Button, ScrollArea, Stack } from "@mantine/core";
import { useInfiniteProfilePosts } from "./hooks/useInfiniteProfilePosts";
import { PostsList } from "./PostsList";

interface ProfileScrollAreaProps {
  profileId: number;
}

export function ProfileScrollArea({ profileId }: ProfileScrollAreaProps) {
  const { data, fetchNextPage } = useInfiniteProfilePosts(profileId);

  if (data)
    return (
      <ScrollArea sx={{ height: "90vh", width: "600px" }}>
        <Stack spacing={30}>
          <Stack spacing={20}>
            {data.pages.map((posts, i) => (
              <PostsList key={i} data={posts} />
            ))}
          </Stack>
          <Button onClick={() => fetchNextPage()}>Load more</Button>
        </Stack>
      </ScrollArea>
    );

  return <div>Loading</div>;
}
