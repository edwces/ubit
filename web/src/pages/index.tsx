import type { NextPage } from "next";
import { MainLayout } from "../modules/layout";
import { FeedScrollArea } from "../modules/post/FeedScrollArea";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <FeedScrollArea />
    </MainLayout>
  );
};

export default Home;
