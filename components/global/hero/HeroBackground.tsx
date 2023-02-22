import styled from "styled-components";

interface IProps {
  children?: JSX.Element;
  isLandingPage?: boolean;
}

const HeroBackground = ({ children, isLandingPage }: IProps) => {
  return (
    <BackgroundImageStyle isLandingPage={isLandingPage}>
      {children}
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
