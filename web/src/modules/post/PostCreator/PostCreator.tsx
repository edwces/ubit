import { Group, Paper, Stack, Text, Avatar } from "@mantine/core";
import { PostForm } from "./PostForm";

export function PostCreator() {
  return (
    <Paper component="article" withBorder p={10}>
      <Stack spacing={20}>
        <Group position="apart">
          <Group spacing={15}>
            <Avatar radius="xl" size="lg" />
            <Text size="lg" weight={500}>
              Homer
            </Text>
          </Group>
        </Group>
        <PostForm />
      </Stack>
    </Paper>
  );
}
