import styled from "styled-components";
import ParishHeader from "components/global/header/ParishHeader";
import AnnouncementEditHeader from "components/parish/announcement/editAnnouncement/AnnouncementEditHeading";
import MyEditor from "components/parish/announcement/editAnnouncement/MyEditor";

const AnnouncementEdit = () => {
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <AnnouncementEditHeader />
        <MyEditor />
      </ContainerStyle>
    </>
  );
};

export default AnnouncementEdit;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 140px auto 0 auto;
`;
