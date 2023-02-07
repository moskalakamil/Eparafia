import React from "react";
import styled from "styled-components";

const LoginCard = (props: { children: JSX.Element }) => {
  return (
    <WrapperCardStyle>
      <CardStyle>{props.children}</CardStyle>
    </WrapperCardStyle>
  );
};

export default LoginCard;

const WrapperCardStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const CardStyle = styled.div`
  margin-top: 6%;
  padding: 40px 70px;
  background-color: #fff;
  border-radius: 20px;
`;
