import { ActionIcon, Group } from "@mantine/core";
import { ThumbDown, ThumbUp } from "tabler-icons-react";
import { PostVoteType } from "../../types/enum";
import { useVoteMutation } from "./hooks/useVoteMutation";

interface PostFooterProps {
  postId: number;
}

export function PostFooter({ postId }: PostFooterProps) {
  const likeMutation = useVoteMutation(PostVoteType.LIKE);
  const dislikeMutation = useVoteMutation(PostVoteType.DISLIKE);

  return (
    <Group position="apart" px={30}>
      <ActionIcon
        radius="xl"
        sx={(theme) => ({ "&:hover": { color: theme.colors.blue[6] } })}
        onClick={() => likeMutation.mutate({ id: postId })}
      >
        <ThumbUp />
      </ActionIcon>
      <ActionIcon
        radius="xl"
        sx={(theme) => ({ "&:hover": { color: theme.colors.red[5] } })}
        onClick={() => dislikeMutation.mutate({ id: postId })}
      >
        <ThumbDown />
      </ActionIcon>
    </Group>
  );
}
