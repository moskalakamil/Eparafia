import ParishHeader from "components/global/header/ParishHeader";
import NewsEditForm from "components/parish/news/editNews";
import NewsEditHeader from "components/parish/news/editNews/NewsEditHeading";

import styled from "styled-components";

const ParishNewsEdit = () => {
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <NewsEditHeader />
        <NewsEditForm />
      </ContainerStyle>
    </>
  );
};

export default ParishNewsEdit;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 140px auto 0 auto;
`;
