import { Avatar, Group, Header, Menu, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { Logout } from "tabler-icons-react";
import { useSession } from "../../stores/useSession";

export function AuthorizedHeader() {
  const setSignedOut = useSession((state) => state.setSignedOut);
  const router = useRouter();

  const logout = () => {
    setSignedOut();
    router.push("/");
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
          <Menu control={<Avatar radius="xl" />}>
            <Menu.Item icon={<Logout />} onClick={logout}>
              Logout
            </Menu.Item>
          </Menu>
        </Group>
      </Group>
    </Header>
  );
}
