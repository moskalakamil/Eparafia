import React from "react";
import styled from "styled-components";

const HeroBackground = (props: { children: JSX.Element }) => {
  return <BackgroundImageStyle>{props.children}</BackgroundImageStyle>;
};

export default HeroBackground;

const BackgroundImageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  background-image: url("/images/Global/background.png");
  background-repeat: no-repeat, repeat;
  background-size: 100%;
  & {
  }
`;
