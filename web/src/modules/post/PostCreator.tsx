import {
  Group,
  Paper,
  Stack,
  TextInput,
  Text,
  Avatar,
  ActionIcon,
} from "@mantine/core";
import { Photo } from "tabler-icons-react";

export default function PostCreator() {
  return (
    <Paper component="article" withBorder p={10} sx={{ width: "400px" }}>
      <Stack spacing={20}>
        <Group position="apart">
          <Group spacing={15}>
            <Avatar radius="xl" size="lg" />
            <Text size="lg" weight={500}>
              Homer
            </Text>
          </Group>
        </Group>
        <TextInput placeholder="Write someting"></TextInput>
        <Group position="apart" px={30}>
          <Group spacing={10}>
            <ActionIcon>
              <Photo />
            </ActionIcon>
            <Text color="dimmed">Add Photo</Text>
          </Group>
        </Group>
      </Stack>
    </Paper>
  );
}
