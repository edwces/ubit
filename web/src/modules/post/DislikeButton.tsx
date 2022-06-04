import { ActionIcon } from "@mantine/core";
import { ThumbDown } from "tabler-icons-react";

export function DislikeButton() {
  return (
    <ActionIcon
      radius="xl"
      sx={(theme) => ({ "&:hover": { color: theme.colors.red[5] } })}
    >
      <ThumbDown />
    </ActionIcon>
  );
}
