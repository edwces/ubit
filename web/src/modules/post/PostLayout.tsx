import { Paper, Stack } from "@mantine/core";
import { ReactNode } from "react";

interface PostLayoutProps {
  children: ReactNode;
}

export function PostLayout({ children }: PostLayoutProps) {
  return (
    <Paper component="article" withBorder p={10} sx={{ width: "400px" }}>
      <Stack spacing={20}>{children}</Stack>
    </Paper>
  );
}
