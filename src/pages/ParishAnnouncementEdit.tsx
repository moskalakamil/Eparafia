import React, { useState } from "react";
import styled from "styled-components";
import ParishHeader from "../components/Global/TheHeader/ParishHeader";
import Editor from "../components/Parish/ParishAnnouncement/ParishAnnouncementEdit/Editor";
import ParishAnnouncementEditHeader from "../components/Parish/ParishAnnouncement/ParishAnnouncementEdit/ParishAnnouncementEditHeader";

const ParishAnnouncementEdit = () => {
  const [content, setContent] = useState<any>({});
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <ParishAnnouncementEditHeader />
        <Editor setContent={setContent} />
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
