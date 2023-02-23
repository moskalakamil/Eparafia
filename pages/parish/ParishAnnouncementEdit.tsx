
import ParishHeader from "components/global/header/ParishHeader";
import AnnouncementEditHeader from "components/parish/announcement/editAnnouncement/AnnouncementEditHeading";

import React from "react";
import styled from "styled-components";
import AnnouncementEdit from "./[ParishName]/edit-announcement";


const ParishAnnouncementEdit = () => {
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <AnnouncementEditHeader />
        <AnnouncementEdit />
        {/* <p>{id}</p> */}
      </ContainerStyle>
    </>
  );
};

export default ParishAnnouncementEdit;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 140px auto 0 auto;
`;
