import { Box, Title } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { RegisterForm } from "../../modules/auth";
import { useRegisterMutation } from "../../modules/auth/hooks";
import { AuthLayout } from "../../modules/layout/AuthLayout";

const Register: NextPage = () => {
  const router = useRouter();
  const mutation = useRegisterMutation({
    onSuccess: () => {
      router.push("/account/login");
    },
  });

  return (
    <AuthLayout>
      <Box sx={{ width: "400px" }}>
        <Title order={1} align="center" mb={20}>
          Register
        </Title>
        <RegisterForm onSubmit={(values) => mutation.mutate(values)} />
      </Box>
    </AuthLayout>
  );
};

export default Register;
