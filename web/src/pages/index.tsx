import type { NextPage } from "next";
import { MainLayout } from "../modules/layout";
import { PostActionButtons, PostHeader } from "../modules/post";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <PostHeader />
      <PostActionButtons />
    </MainLayout>
  );
};

export default Home;
