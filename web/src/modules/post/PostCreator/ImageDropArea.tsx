import { Box, Button, Center, Container, Group, Text } from "@mantine/core";
import { ChangeEventHandler, useRef } from "react";

interface ImageDropAreaProps {
  onFile?: ChangeEventHandler<HTMLInputElement>;
}

export function ImageDropArea({ onFile }: ImageDropAreaProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Center>
        <Group spacing={5}>
          <Text>Drop your image here or</Text>
          <Button onClick={() => fileInput.current?.click()}>Upload</Button>
          <Box sx={{ display: "none" }}>
            <input type="file" onChange={onFile} ref={fileInput} />
          </Box>
        </Group>
      </Center>
    </Container>
  );
}
