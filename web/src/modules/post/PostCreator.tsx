import {
  Group,
  Paper,
  Stack,
  TextInput,
  Text,
  Avatar,
  ActionIcon,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { Photo } from "tabler-icons-react";
import { useSession } from "../../stores/useSession";
import { useCreatePostMutation } from "./hooks/useCreatePostMutation";

export function PostCreator() {
  const mutation = useCreatePostMutation();
  const data = useSession((state) => state.data);
  const status = useSession((state) => state.status);
  const [text, setText] = useState("");

  if (status === "signIn")
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
          <TextInput
            placeholder="Write someting"
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
          ></TextInput>
          <Group position="apart" px={30}>
            <Group spacing={10} position="apart">
              <ActionIcon>
                <Photo />
              </ActionIcon>
              <Button
                onClick={() =>
                  mutation.mutate({ authorId: data.user.id!, text })
                }
              ></Button>
            </Group>
          </Group>
        </Stack>
      </Paper>
    );

  return <></>;
}
