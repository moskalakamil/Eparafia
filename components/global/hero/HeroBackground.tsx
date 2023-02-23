import styled from "styled-components";
// import background from "../../images/global/background.png";
import background from "/public/images/global/background.png";

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
interface IStyleProps {
  isLandingPage?: boolean;
}

const BackgroundImageStyle = styled.div<IStyleProps>`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  background-image: url(${background.src});
  background-repeat: no-repeat, repeat;
  background-size: 100%;
  max-height: ${(props) => (props.isLandingPage ? "1000px" : "none")};
`;
