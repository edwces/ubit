import { Anchor, Avatar, Group, Stack, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import Link from "next/link";

interface PostHeaderProps {
  userName: string;
  userId: number;
  avatarUrl: string;
  datePosted: string;
}

export function PostHeader({
  userName,
  avatarUrl,
  datePosted,
  userId,
}: PostHeaderProps) {
  return (
    <Group position="apart">
      <Group spacing={15}>
        <Link href={`/account/${userId}/${userName}`} passHref>
          <Avatar radius="xl" size="lg" src={avatarUrl} />
        </Link>
        <Stack spacing={0}>
          <Anchor
            size="lg"
            weight={500}
            component={NextLink}
            href={`/account/${userId}/${userName}`}
          >
            {userName}
          </Anchor>
          <Text color="dimmed" size="sm">
            {datePosted}
          </Text>
        </Stack>
      </Group>
    </Group>
  );
}
