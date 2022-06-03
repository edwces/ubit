import { Button, Group, Header, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";

export function DefaultHeader() {
  return (
    <Header p={2} height={65}>
      <Group
        px="md"
        position="apart"
        sx={{ display: "flex", alignItems: "center", height: "100%" }}
      >
        <Title order={2}>Ubit</Title>
        <Group spacing={10}>
          <Button
            component={NextLink}
            href="/account/register"
            variant="outline"
          >
            Register
          </Button>
          <Button component={NextLink} href="/account/login">
            Login
          </Button>
        </Group>
      </Group>
    </Header>
  );
}
