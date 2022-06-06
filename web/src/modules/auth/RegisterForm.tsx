import { TextInput, PasswordInput, Button, Stack, Paper } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { FormEvent } from "react";
import { RegisterFormValues } from "../../types/interfaces";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password should consist of atleast 5 characters" }),
  name: z.string({ required_error: "Name is required" }),
});

interface RegisterFormProps {
  onSubmit: (values: RegisterFormValues, event?: FormEvent<Element>) => void;
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const form = useForm<RegisterFormValues>({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  return (
    <Paper withBorder p="md" shadow="md" radius="md">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack spacing="sm">
          <TextInput
            aria-required
            label="name"
            placeholder="yourname"
            {...form.getInputProps("name")}
          />
          <TextInput
            aria-required
            label="email"
            placeholder="youremail@mail.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            aria-required
            label="password"
            placeholder="password"
            {...form.getInputProps("password")}
          />
        </Stack>
        <Button mt={25} type="submit" fullWidth>
          Register
        </Button>
      </form>
    </Paper>
  );
}
