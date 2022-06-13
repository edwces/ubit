import { useInfiniteProfilePosts } from "./hooks/useInfiniteProfilePosts";
import { InfinitePostsList } from "./InfinitePostsList";

interface ProfileScrollAreaProps {
  profileId: number;
}

export function ProfileScrollArea({ profileId }: ProfileScrollAreaProps) {
  const { data, fetchNextPage } = useInfiniteProfilePosts(profileId);

  if (data) return <InfinitePostsList data={data} onLoadMore={fetchNextPage} />;

  return <div>Loading</div>;
}
