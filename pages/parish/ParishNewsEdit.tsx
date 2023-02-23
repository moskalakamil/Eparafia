import ParishHeader from "components/global/header/ParishHeader";
import News from "components/parish/news";
import NewsEditHeader from "components/parish/news/editNews/NewsEditHeading";
import styled from "styled-components";

const ParishNewsEdit = () => {
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <NewsEditHeader />
        <News />
      </ContainerStyle>
    </>
  );
};

export default ParishNewsEdit;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 140px auto 0 auto;
`;
