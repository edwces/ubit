import { Avatar, Group, Stack, Text } from "@mantine/core";

interface PostHeaderProps {
  userName: string;
  avatarUrl: string;
  datePosted: string;
}

export function PostHeader({
  userName,
  avatarUrl,
  datePosted,
}: PostHeaderProps) {
  return (
    <Group position="apart">
      <Group spacing={15}>
        <Avatar radius="xl" size="lg" src={avatarUrl} />
        <Stack spacing={0}>
          <Text size="lg" weight={500}>
            {userName}
          </Text>
          <Text color="dimmed" size="sm">
            {datePosted}
          </Text>
        </Stack>
      </Group>
    </Group>
  );
}
