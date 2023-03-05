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
  padding: 160px 70px 40px 70px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    padding-top: 40px;
    margin-top: 6%;
    border-radius: 20px;
    width: auto;
    height: auto;
  }
`;
