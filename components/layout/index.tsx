import TheHeader from "components/layout/header/TheHeader";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <ContainerStyle>
      <TheHeader />
      {children}
    </ContainerStyle>
  );
};

export default Layout;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
