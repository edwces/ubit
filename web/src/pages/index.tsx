import type { NextPage } from "next";
import { MainLayout } from "../modules/layout";
import { PostLayout } from "../modules/post";
import { Text } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <PostLayout>
        <Text size="lg">Hello there</Text>
      </PostLayout>
    </MainLayout>
  );
};

export default Home;
