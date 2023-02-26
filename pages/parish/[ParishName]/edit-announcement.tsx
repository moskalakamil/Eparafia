import styled from "styled-components";
import ParishHeader from "components/global/header/ParishHeader";
import AnnouncementEditHeader from "components/parish/announcement/editAnnouncement/AnnouncementEditHeading";
import MyEditor from "components/parish/announcement/editAnnouncement/MyEditor";
import TheHeader from "components/global/header/TheHeader";

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
