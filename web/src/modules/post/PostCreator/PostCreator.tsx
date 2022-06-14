import { Group, Paper, Stack, Text, Avatar } from "@mantine/core";
import { useSession } from "../../../stores/useSession";
import { useCreatePostMutation } from "../hooks/useCreatePostMutation";
import { PostForm } from "./PostForm";

export function PostCreator() {
  const createPost = useCreatePostMutation();
  const token = useSession((state) => state.token);

  const sendPostForm = ({
    text,
    media,
  }: {
    text: string;
    media: File | null;
  }) => {
    const form = new FormData();
    form.append("media", media!);
    form.append("text", text);
    createPost.mutate({ data: form, token: token! });
  };

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
        <PostForm onSubmit={sendPostForm} />
      </Stack>
    </Paper>
  );
}
