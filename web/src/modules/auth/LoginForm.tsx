import {
  TextInput,
  PasswordInput,
  Button,
  Space,
  Stack,
  Paper,
  Text,
  Anchor,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { FormEvent } from "react";
import { z } from "zod";
import { LoginFormValues } from "../../types/interfaces/loginFormValues";
import { NextLink } from "@mantine/next";

const schema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password should consist of atleast 5 characters" }),
});

interface LoginFormProps {
  onSubmit: (values: LoginFormValues, event?: FormEvent<Element>) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const form = useForm<LoginFormValues>({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Stack spacing="lg">
      <Paper withBorder p="xl" shadow="md" radius="md">
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack spacing="md">
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
          <Button type="submit" mt={25} fullWidth>
            Login
          </Button>
        </form>
      </Paper>
      <Paper withBorder p="md" shadow="md" radius="md">
        <Text align="center">
          Don't have an account{" "}
          <Anchor component={NextLink} weight={500} href={"/account/register"}>
            Register here
          </Anchor>
        </Text>
      </Paper>
    </Stack>
  );
}
