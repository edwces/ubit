import type { NextPage } from "next";
import { MainLayout } from "../modules/layout";
import { FeedScrollbar } from "../modules/post/FeedScrollbar";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <FeedScrollbar />
    </MainLayout>
  );
};

export default Home;
