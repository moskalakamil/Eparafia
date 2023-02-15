import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ParishEditingNews } from "../../../constants/parish";
import { bigText, normalText } from "../../../style/TextSize";
import TextDetails from "./TextDetails";

const BtnGoBack = (props: {
  windowWidth: number;
  minWidthTextVisible: number;
}) => {
  return (
    <Link to="/priest/parish" style={{ textDecoration: "none" }}>
      <ContainerStyle minWidth={props.minWidthTextVisible + "px"}>
        <img src="/images/Global/go-back.svg" alt="GoBackIcon" />
        {props.windowWidth > props.minWidthTextVisible && (
          <TextDetails
            text={ParishEditingNews.goBack}
            size={normalText.size}
            weight={bigText.weight}
          />
        )}
      </ContainerStyle>
    </Link>
  );
};

export default BtnGoBack;

const ContainerStyle = styled.div<{ minWidth: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: 600px) {
    position: absolute;
    left: 20px;
    top: 30px;
  }
  @media (min-width: ${(props) => props.minWidth}) {
    position: static;
  }
  p {
    color: black;
  }
`;
