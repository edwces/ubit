import { NextPage } from "next";
import { useRouter } from "next/router";
import { MainLayout } from "../../../modules/layout";
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
        <ProfileHeader
          username={data.name}
          bannerUrl="df"
          avatarUrl={data.avatar.url}
          id={data.id}
        />
      </MainLayout>
    );

  return <PageLoader />;
};

export default ProfilePage;
