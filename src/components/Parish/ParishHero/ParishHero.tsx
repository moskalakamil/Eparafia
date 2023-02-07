import React from "react";
import styled from "styled-components";
import ParishHeroPhoto from "./ParishHeroPhoto";
import ParishHeroMain from "./ParishHeroMain";

const ParishHero = () => {
  return (
    <HeroContainerStyle>
      <ParishHeroMain />
      <ParishHeroPhoto />
    </HeroContainerStyle>
  );
};

export default ParishHero;

const HeroContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 140px;
`;
