import React from "react";
import styled from "styled-components";
import ParishHeroPhoto from "./ParishHeroPhoto";
import ParishHeroMain from "./ParishHeroMain";

interface IProps {
  callname: string;
}

const ParishHero = ({ callname }: IProps) => {
  return (
    <HeroContainerStyle>
      <ParishHeroMain callname={callname} />
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
