import React from "react";
import styled from "styled-components";
import ParishHeader from "../components/Global/TheHeader/ParishHeader";
import ParishHeroPhoto from "../components/Parish/ParishHero/ParishHeroPhoto";
import ParishHero from "../components/Parish/ParishHero/ParishHero";

const Parish = () => {
  return (
    <>
      <ParishHeader />
      <HeroContainerStyle>
        <ParishHero />
        <ParishHeroPhoto />
      </HeroContainerStyle>
    </>
  );
};

export default Parish;

const HeroContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 140px;

  @media (min-width: 1921px) {
    max-width: 1920px;
    margin: 140px auto 0 auto;
  }
`;
