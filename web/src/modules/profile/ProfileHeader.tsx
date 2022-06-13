import { Avatar, Box, Button, Group, Paper, Title } from "@mantine/core";
import Image from "next/image";
import { useRef } from "react";
import { useQueryClient } from "react-query";
import { useSession } from "../../stores/useSession";
import { useChangeAvatarMutation } from "./hooks/useChangeAvatarMutation";

interface ProfileHeaderProps {
  bannerUrl: string;
  username: string;
  avatarUrl: string;
  id: number;
}

export function ProfileHeader({
  username,
  avatarUrl,
  bannerUrl,
  id,
}: ProfileHeaderProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const changeAvatar = useChangeAvatarMutation({
    onSuccess: () => queryClient.invalidateQueries(["profile", id]),
  });
  const token = useSession((state) => state.token);

  const onFileChange = () => {
    const form = new FormData();

    form.append("avatar", fileInput.current!.files![0]);

    changeAvatar.mutate({ token: token!, data: form });
  };

  return (
    <Paper withBorder sx={{ width: "500px" }}>
      <Image src={""} width={500} height={200} alt="banner" />
      <Group position="apart" p={10}>
        <Group spacing={50}>
          <Avatar
            size={110}
            radius={100}
            sx={(theme) => ({
              bottom: "50px",
              backgroundColor: theme.white,
              border: `3px solid ${theme.white}`,
              "&:hover": { filter: "brightness(80%)" },
            })}
            onClick={() => fileInput.current?.click()}
            src={avatarUrl}
          />
          <Box sx={{ display: "none" }}>
            <input
              type="file"
              ref={fileInput}
              accept="image/*"
              onChange={onFileChange}
            />
          </Box>
          <Title order={3} mb={50}>
            {username}
          </Title>
        </Group>
        <Button sx={{ alignSelf: "flex-start" }}>Follow</Button>
      </Group>
    </Paper>
  );
}
