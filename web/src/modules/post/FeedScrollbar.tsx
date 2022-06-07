import { ScrollArea } from "@mantine/core";
import { useInfinitePosts } from "./hooks/useInfinitePosts";
import { PostsList } from "./PostsList";

export function FeedScrollbar() {
  const { data } = useInfinitePosts();

  if (data)
    return (
      <ScrollArea>
        {data.pages.map((posts, i) => (
          <PostsList key={i} data={posts} />
        ))}
      </ScrollArea>
    );

  return <div>Loading</div>;
}
