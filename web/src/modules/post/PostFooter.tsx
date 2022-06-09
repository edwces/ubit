import { ActionIcon, Group, Text } from "@mantine/core";
import { ThumbDown, ThumbUp } from "tabler-icons-react";
import { PostVoteType } from "../../types/enum";
import { useVoteMutation } from "./hooks/useVoteMutation";

interface PostFooterProps {
  postId: number;
  likes: number;
  dislikes: number;
  voteStatus?: PostVoteType;
}

export function PostFooter({
  postId,
  likes,
  dislikes,
  voteStatus = PostVoteType.NONE,
}: PostFooterProps) {
  const likeMutation = useVoteMutation(PostVoteType.LIKE);
  const dislikeMutation = useVoteMutation(PostVoteType.DISLIKE);

  return (
    <Group position="apart" px={30}>
      <Group spacing={10}>
        <ActionIcon
          radius="xl"
          sx={(theme) => ({ "&:hover": { color: theme.colors.blue[6] } })}
          onClick={() => likeMutation.mutate({ id: postId })}
          color={voteStatus === PostVoteType.LIKE ? "blue" : undefined}
        >
          <ThumbUp />
        </ActionIcon>
        <Text>{likes}</Text>
      </Group>
      <Group spacing={10}>
        <ActionIcon
          radius="xl"
          sx={(theme) => ({ "&:hover": { color: theme.colors.red[5] } })}
          onClick={() => dislikeMutation.mutate({ id: postId })}
          color={voteStatus === PostVoteType.DISLIKE ? "red" : undefined}
        >
          <ThumbDown />
        </ActionIcon>
        <Text>{dislikes}</Text>
      </Group>
    </Group>
  );
}
