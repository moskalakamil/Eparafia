import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
  color?: string;
  padding?: string;
  width?: string;
  typeOfBtn?: string;
}

const ButtonDetails = ({ text, color, padding, width, typeOfBtn }: IProps) => {
  return (
    <ButtonStyle
      color={color}
      padding={padding}
      width={width}
      type={typeOfBtn || "button"}
    >
      {text}
    </ButtonStyle>
  );
};

export default ButtonDetails;

interface IStyledAttrsProps {
  color?: string;
  theme: any;
}

interface IStyledProps {
  color: string;
  padding?: string;
  width?: string;
  type: any;
}

const ButtonStyle = styled.button.attrs(
  ({ color, theme }: IStyledAttrsProps) => ({
    color:
      color === "primary"
        ? theme.colors.primary
        : color === "secondary"
        ? theme.colors.secondary
        : color,
  })
)<IStyledProps>`
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding || "15px"};

  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 0;
  width: ${(props) => props.width || "100%"};
  cursor: pointer;
`;
