import Image from 'next/image';
import styled from 'styled-components';

interface IProps {
  children?: JSX.Element;
  isLandingPage?: string;
}

const HeroBackground = ({ children, isLandingPage }: IProps) => {
  return (
    <BackgroundImageStyle islandingpage={isLandingPage}>
      <Image src="/images/global/background.png" alt="" fill />
      {children}
    </BackgroundImageStyle>
  );
};

export default HeroBackground;

interface IStyleProps {
  islandingpage?: string;
}

const BackgroundImageStyle = styled.div<IStyleProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  max-height: ${(props) => (props.islandingpage ? '1000px' : 'none')};
`;
