import { Button, TextInput } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import { ImageDropArea } from "./ImageDropArea";

interface PostFormProps {
  onSubmit?: (values: { text: string; media: File | null }) => void;
}

export function PostForm({ onSubmit }: PostFormProps) {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const assignFile = (ev: ChangeEvent<HTMLInputElement>) => {
    setFile(ev.currentTarget!.files![0]);
  };

  return (
    <>
      <TextInput
        placeholder="Write someting"
        value={text}
        onChange={(ev) => setText(ev.currentTarget.value)}
      ></TextInput>
      <ImageDropArea onFile={assignFile} />
      <Button onClick={() => onSubmit && onSubmit({ text, media: file })}>
        Submit
      </Button>
    </>
  );
}
