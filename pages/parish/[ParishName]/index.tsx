import ParishHeader from "components/global/header/ParishHeader";
import News from "components/parish/news";
import ParishHero from "components/parish/parishHero";
import MenuCards from "components/parish/parishMenu";
import styled from "styled-components";

const Parish = () => {
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <ParishHero />
        <MenuCards />
        <News />
      </ContainerStyle>
    </>
  );
};

export default Parish;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 140px auto 0 auto;
`;
