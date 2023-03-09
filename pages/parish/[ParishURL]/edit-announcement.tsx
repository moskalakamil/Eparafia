import AnnouncementEditHeader from "components/parish/announcement/editAnnouncement/AnnouncementEditHeading";
import MyEditor from "components/parish/announcement/editAnnouncement/MyEditor";
import TheHeader from "components/layout/header/TheHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps } from "next";

const AnnouncementEdit = () => {
  return (
    <>
      <TheHeader />
      <AnnouncementEditHeader />
      <MyEditor />
    </>
  );
};

export default AnnouncementEdit;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "parish"])),
  },
});
