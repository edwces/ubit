import { ActionIcon } from "@mantine/core";
import { ThumbUp } from "tabler-icons-react";

export function LikeButton() {
  return (
    <ActionIcon
      radius="xl"
      sx={(theme) => ({ "&:hover": { color: theme.colors.blue[6] } })}
    >
      <ThumbUp />
    </ActionIcon>
  );
}
