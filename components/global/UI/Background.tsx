import HeroBackground from "components/global/hero/HeroBackground";
import Card from "components/global/UI/cards/Card";

interface IProps {
  children: JSX.Element;
}

const AuthBackground = ({ children }: IProps) => {
  return (
    <HeroBackground>
      <Card>{children}</Card>
    </HeroBackground>
  );
};

export default AuthBackground;
