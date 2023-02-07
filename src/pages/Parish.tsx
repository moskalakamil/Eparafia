import styled from "styled-components";
import ParishHeader from "../components/Global/TheHeader/ParishHeader";
import ParishHero from "../components/Parish/ParishHero/ParishHero";
import ParishMenuCards from "../components/Parish/ParishMenu/ParishMenuCards";

const Parish = () => {
  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <ParishHero />
        <ParishMenuCards />
      </ContainerStyle>
    </>
  );
};

export default Parish;

const ContainerStyle = styled.div`
  @media (min-width: 1921px) {
    max-width: 1920px;
    margin: 140px auto 0 auto;
  }
`;
