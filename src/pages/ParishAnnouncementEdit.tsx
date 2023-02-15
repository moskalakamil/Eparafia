import React from "react";
import styled from "styled-components";
import ParishHeader from "../components/Global/TheHeader/ParishHeader";
import ParishAnnouncementEditHeader from "../components/Parish/ParishAnnouncement/ParishAnnouncementEdit/ParishAnnouncementEditHeader";
import ParishAnnouncementTextEditor from "../components/Parish/ParishAnnouncement/ParishAnnouncementEdit/ParishAnnouncementTextEditor";

const ParishAnnouncementEdit = () => {
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <ParishAnnouncementEditHeader />
        <ParishAnnouncementTextEditor />
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
