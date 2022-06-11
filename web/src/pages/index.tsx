import { Center, Stack } from "@mantine/core";
import type { NextPage } from "next";
import { MainLayout } from "../modules/layout";
import { AppMetadata } from "../modules/meta";
import { FeedScrollArea } from "../modules/post/FeedScrollArea";

const Home: NextPage = () => {
  return (
    <>
      <AppMetadata title="Ubit" />
      <MainLayout>
        <Center>
          <Stack spacing={25}>
            <FeedScrollArea />
          </Stack>
        </Center>
      </MainLayout>
    </>
  );
};

export default Home;
