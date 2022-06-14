import { Button, TextInput } from "@mantine/core";
import { ImageDropArea } from "./ImageDropArea";

interface PostFormProps {
  onSubmit?: () => void;
}

export function PostForm({ onSubmit }: PostFormProps) {
  return (
    <>
      <TextInput placeholder="Write someting"></TextInput>
      <ImageDropArea />
      <Button onClick={onSubmit}>Submit</Button>
    </>
  );
}
