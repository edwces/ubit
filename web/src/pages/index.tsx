import { Center, Stack } from "@mantine/core";
import type { NextPage } from "next";
import { MainLayout } from "../modules/layout";
import { FeedScrollArea } from "../modules/post/FeedScrollArea";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Center>
        <Stack spacing={25}>
          <FeedScrollArea />
        </Stack>
      </Center>
    </MainLayout>
  );
};

export default Home;
