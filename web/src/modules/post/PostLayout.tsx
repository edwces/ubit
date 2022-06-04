import { Paper, Stack } from "@mantine/core";
import { ReactNode } from "react";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

interface PostLayoutProps {
  children: ReactNode;
}

export function PostLayout({ children }: PostLayoutProps) {
  return (
    <Paper withBorder p={10} sx={{ width: "400px" }}>
      <Stack spacing={20}>
        <PostHeader
          userName="Bob hello"
          avatarUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          datePosted="1/23/2004"
        />
        {children}
        <PostFooter likeNumber={12304} dislikeNumber={23405} />
      </Stack>
    </Paper>
  );
}
