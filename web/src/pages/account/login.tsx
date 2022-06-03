import { Box, Title } from "@mantine/core";
import { NextPage } from "next";
import { LoginForm } from "../../modules/auth";
import { AuthLayout } from "../../modules/layout/AuthLayout";

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <Box sx={{ width: "400px" }}>
        <Title order={1} align="center" mb={20}>
          Login
        </Title>
        <LoginForm onSubmit={(values) => console.log(values)} />
      </Box>
    </AuthLayout>
  );
};

export default Login;
