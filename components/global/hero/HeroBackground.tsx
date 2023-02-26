import Image from "next/image";
import styled from "styled-components";
// import background from "../../images/global/background.png";

interface IProps {
  children?: JSX.Element;
  isLandingPage?: boolean;
}

const HeroBackground = ({ children, isLandingPage }: IProps) => {
  return (
    <BackgroundImageStyle isLandingPage={isLandingPage}>
      <Image src="/images/global/background.png" alt="" fill />
      {children}
    </BackgroundImageStyle>
  );
};

export default HeroBackground;
interface IStyleProps {
  isLandingPage?: boolean;
}

const BackgroundImageStyle = styled.div<IStyleProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  max-height: ${(props) => (props.isLandingPage ? "1000px" : "none")};
`;
