import { Center, Stack } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { MainLayout } from "../../../modules/layout";
import { ProfileScrollArea } from "../../../modules/post/ProfileScrollArea";
import { useProfile } from "../../../modules/profile/hooks/useProfile";
import { ProfileHeader } from "../../../modules/profile/ProfileHeader";
import { PageLoader } from "../../../modules/util/PageLoader";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { data } = useProfile(Number.parseInt(router.query.id as string), {
    enabled: router.isReady,
  });

  if (data)
    return (
      <MainLayout>
        <Center>
          <Stack spacing={25}>
            <ProfileHeader
              username={data.name}
              bannerUrl="df"
              avatarUrl={data.avatar.url}
              id={data.id}
            />
            <ProfileScrollArea profileId={data.id} />
          </Stack>
        </Center>
      </MainLayout>
    );

  return <PageLoader />;
};

export default ProfilePage;
