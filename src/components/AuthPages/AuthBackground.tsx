import React from "react";
import LoginCard from "../Global/UI/Cards/LoginCard";
import HeroBackground from "../Global/Hero/HeroBackground";

const AuthBackground = (props: { children: JSX.Element }) => {
  return (
    <HeroBackground>
      <LoginCard>{props.children}</LoginCard>
    </HeroBackground>
  );
};

export default AuthBackground;
