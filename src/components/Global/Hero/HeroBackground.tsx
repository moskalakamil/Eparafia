import React from "react";
import styled from "styled-components";

const HeroBackground = (props: {
  children?: JSX.Element;
  isLandingPage?: boolean;
}) => {
  return (
    <BackgroundImageStyle isLandingPage={props.isLandingPage}>
      {props.children}
    </BackgroundImageStyle>
  );
};

export default HeroBackground;

const BackgroundImageStyle = styled.div<{ isLandingPage?: boolean }>`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  background-image: url("/images/Global/background.png");
  background-repeat: no-repeat, repeat;
  background-size: 100%;
  max-height: ${(props) => (props.isLandingPage ? "1000px" : "none")};
`;
