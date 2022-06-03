import { Center, Container } from "@mantine/core";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Container fluid sx={{ height: "100vh" }}>
        <Center sx={{ height: "100vh" }}>{children}</Center>
      </Container>
    </>
  );
}
