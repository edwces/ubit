import { Center, Container, Loader } from "@mantine/core";

export function PageLoader() {
  return (
    <>
      <Container fluid sx={{ height: "100vh" }}>
        <Center sx={{ height: "100vh" }}>
          <Loader size="xl" />
        </Center>
      </Container>
    </>
  );
}
