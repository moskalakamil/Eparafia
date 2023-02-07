import React from "react";
import styled from "styled-components";
import { bigText, normalText, extraBigText } from "../../../style/TextSize";

interface Props {
  text: string;
  color?: string;
  padding?: string;
  typeOfBtn?: string;
  type?: any;
}

const ButtonDetails = (props: Props) => {
  return (
    <ButtonStyle
      text=""
      color={props.color}
      padding={props.padding}
      type={props.typeOfBtn || "button"}
    >
      {props.text}
    </ButtonStyle>
  );
};

export default ButtonDetails;

const ButtonStyle = styled.button<Props>`
  background-color: ${(props) => props.color || "white"};
  padding: ${(props) => props.padding || "15px"};
  font-size: ${normalText.size};
  font-weight: ${bigText.weight};
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 0;
  width: 100%;
  cursor: pointer;
`;
