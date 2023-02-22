import React from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element;
}

const Card = ({ children }: IProps) => {
  return (
    <WrapperCardStyle>
      <CardStyle>{children}</CardStyle>
    </WrapperCardStyle>
  );
};

export default Card;

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
