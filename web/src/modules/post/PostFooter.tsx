import { ActionIcon, Group, Text } from "@mantine/core";
import { Share } from "tabler-icons-react";
import { DislikeButton } from "./DislikeButton";
import { LikeButton } from "./LikeButton";

interface PostFooterProps {
  likeNumber: number;
  dislikeNumber: number;
}

export function PostFooter({ likeNumber, dislikeNumber }: PostFooterProps) {
  return (
    <Group position="apart" px={30}>
      <Group spacing={5}>
        <LikeButton />
        <Text color="dimmed">{likeNumber}</Text>
      </Group>
      <ActionIcon radius="xl">
        <Share />
      </ActionIcon>
      <Group spacing={5}>
        <DislikeButton />
        <Text color="dimmed">{dislikeNumber}</Text>
      </Group>
    </Group>
  );
}
