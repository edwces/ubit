import { useSession } from "../../stores/useSession";
import { PostVoteType } from "../../types/enum";
import { Post } from "../../types/interfaces/post";
import { useVoteMutation } from "./hooks/useVoteMutation";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostLayout } from "./PostLayout";
import { Text } from "@mantine/core";

interface PostContainerProps {
  post: Post;
}

export function PostContainer({ post }: PostContainerProps) {
  const vote = useVoteMutation();
  const status = useSession((state) => state.status);

  const likePost = () => {
    if (status !== "signIn") return;
    return post.voteStatus === PostVoteType.LIKE
      ? vote.mutate({ id: post.id, type: PostVoteType.NONE })
      : vote.mutate({ id: post.id, type: PostVoteType.LIKE });
  };

  const dislikePost = () => {
    if (status !== "signIn") return;
    return post.voteStatus === PostVoteType.DISLIKE
      ? vote.mutate({ id: post.id, type: PostVoteType.NONE })
      : vote.mutate({ id: post.id, type: PostVoteType.DISLIKE });
  };

  return (
    <PostLayout>
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
        onLike={likePost}
        onDislike={dislikePost}
      />
    </PostLayout>
  );
}
