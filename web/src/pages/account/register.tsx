import { Box, Title } from "@mantine/core";
import { NextPage } from "next";
import { RegisterForm } from "../../modules/auth";
import { AuthLayout } from "../../modules/layout/AuthLayout";

const Register: NextPage = () => {
  return (
    <AuthLayout>
      <Box sx={{ width: "400px" }}>
        <Title order={1} align="center" mb={20}>
          Register
        </Title>
        <RegisterForm onSubmit={(values) => console.log(values)} />
      </Box>
    </AuthLayout>
  );
};

export default Register;
