import { Box, Title } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { LoginForm } from "../../modules/auth";
import { useLoginMutation } from "../../modules/auth/hooks";
import { AuthLayout } from "../../modules/layout/AuthLayout";
import { AppMetadata } from "../../modules/meta";
import { useSession } from "../../stores/useSession";

const Login: NextPage = () => {
  const router = useRouter();
  const setSignedIn = useSession((state) => state.setSignedIn);
  const mutation = useLoginMutation({
    onSuccess: (data) => {
      setSignedIn({ user: data.user }, data.token);
      router.push("/");
    },
  });

  return (
    <>
      <AppMetadata title="Login" />
      <AuthLayout>
        <Box sx={{ width: "400px" }}>
          <Title order={1} align="center" mb={20}>
            Login
          </Title>
          <LoginForm onSubmit={(values) => mutation.mutate(values)} />
        </Box>
      </AuthLayout>
    </>
  );
};

export default Login;
