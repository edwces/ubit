import { ActionIcon, Group } from "@mantine/core";
import { Share, ThumbDown, ThumbUp } from "tabler-icons-react";

export function PostActionButtons() {
  return (
    <Group position="apart">
      <ActionIcon>
        <ThumbUp />
      </ActionIcon>
      <ActionIcon>
        <Share />
      </ActionIcon>
      <ActionIcon>
        <ThumbDown />
      </ActionIcon>
    </Group>
  );
}
