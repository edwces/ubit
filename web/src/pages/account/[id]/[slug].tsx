import { Avatar, Text } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { MainLayout } from "../../../modules/layout";
import { PageLoader } from "../../../modules/util/PageLoader";

const ProfilePage: NextPage = () => {
  const router = useRouter();

  if (router.isReady)
    return (
      <MainLayout>
        <Avatar />
        <Text>{router.query.slug}</Text>
      </MainLayout>
    );

  return <PageLoader />;
};

export default ProfilePage;
