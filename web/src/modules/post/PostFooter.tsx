import { ActionIcon, Group, Text } from "@mantine/core";
import { Share, ThumbDown, ThumbUp } from "tabler-icons-react";
import { PostVoteType } from "../../types/enum";
import { useVoteMutation } from "./hooks/useVoteMutation";

interface PostFooterProps {
  likeNumber: number;
  dislikeNumber: number;
  postId: number;
}

export function PostFooter({
  likeNumber,
  dislikeNumber,
  postId,
}: PostFooterProps) {
  const likeMutation = useVoteMutation(PostVoteType.LIKE);
  const dislikeMutation = useVoteMutation(PostVoteType.DISLIKE);

  return (
    <Group position="apart" px={30}>
      <Group spacing={5}>
        <ActionIcon
          radius="xl"
          sx={(theme) => ({ "&:hover": { color: theme.colors.blue[6] } })}
          onClick={() => likeMutation.mutate({ id: postId })}
        >
          <ThumbUp />
        </ActionIcon>

        <Text color="dimmed">{likeNumber}</Text>
      </Group>
      <ActionIcon radius="xl">
        <Share />
      </ActionIcon>
      <Group spacing={5}>
        <ActionIcon
          radius="xl"
          sx={(theme) => ({ "&:hover": { color: theme.colors.red[5] } })}
          onClick={() => dislikeMutation.mutate({ id: postId })}
        >
          <ThumbDown />
        </ActionIcon>

        <Text color="dimmed">{dislikeNumber}</Text>
      </Group>
    </Group>
  );
}
