import type { NextPage } from "next";
import { MainLayout } from "../modules/layout";
import { FeedScrollArea } from "../modules/post/FeedScrollArea";
import PostCreator from "../modules/post/PostCreator";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <PostCreator />
      <FeedScrollArea />
    </MainLayout>
  );
};

export default Home;
