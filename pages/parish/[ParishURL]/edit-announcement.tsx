import AnnouncementEditHeader from "components/parish/announcement/editAnnouncement/AnnouncementEditHeading";
import MyEditor from "components/parish/announcement/editAnnouncement/MyEditor";
import TheHeader from "components/layout/header/TheHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
