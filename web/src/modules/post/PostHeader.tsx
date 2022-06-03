import { Avatar, Group, Text } from "@mantine/core";

export function PostHeader() {
  return (
    <Group position="apart">
      <Group spacing={10}>
        <Avatar radius="xl" />
        <Text color="dimmed">John simley</Text>
      </Group>
    </Group>
  );
}
