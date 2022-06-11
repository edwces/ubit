import { Avatar, Group, Header, Menu, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { Logout, User } from "tabler-icons-react";
import { useSession } from "../../stores/useSession";

export function AuthorizedHeader() {
  const setSignedOut = useSession((state) => state.setSignedOut);
  const user = useSession((state) => state.data.user);
  const router = useRouter();

  const logout = () => {
    setSignedOut();
    router.push("/");
  };

  const goToProfile = () => {
    router.push(`/account/${user.id}/${user.name}`);
  };

  return (
    <Header p={2} height={65}>
      <Group
        px="md"
        position="apart"
        sx={{ display: "flex", alignItems: "center", height: "100%" }}
      >
        <Title order={2}>Ubit</Title>
        <Group spacing={10}>
          <Menu
            control={<Avatar radius="xl" />}
            sx={{
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease-out",
              "&:hover": {
                filter: "brightness(80%)",
              },
            }}
          >
            <Menu.Item icon={<Logout />} onClick={logout}>
              Logout
            </Menu.Item>
            <Menu.Item icon={<User />} onClick={goToProfile}>
              Profile
            </Menu.Item>
          </Menu>
        </Group>
      </Group>
    </Header>
  );
}
