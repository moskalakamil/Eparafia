import { useState } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  placeholder: string;
  id: any;
  typeOfInput?: string;
  onInputEntering: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputDetails = (props: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <ContainerStyle>
        <LabelStyle htmlFor={props.id}>{props.label}</LabelStyle>
        <InputStyle
          id={props.id}
          type={props.typeOfInput || "text"}
          placeholder={props.placeholder}
          onInput={props.onInputEntering}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <SpanStyle isFocus={isFocus}></SpanStyle>
      </ContainerStyle>
    </>
  );
};

export default InputDetails;
const ContainerStyle = styled.div`
  position: relative;
  margin: 20px 0;
`;
const LabelStyle = styled.label`
  font-size: 25px;
`;

const InputStyle = styled.input`
  outline: none;
  border: 0;
  padding: 9px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.inputPrimary};
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  margin: 20px 0 0 0;

  @media (min-width: 768px) {
    padding: 15px;
    background-color: ${(props) => props.theme.colors.inputPrimary};
    border-radius: 10px;
    &:focus {
      background-color: ${(props) => props.theme.colors.inputFocused};
    }
  }
`;
const SpanStyle = styled.span<{ isFocus: boolean }>`
  position: absolute;
  bottom: 0;
  left: ${(props) => (props.isFocus ? "0" : "50%")};
  width: ${(props) => (props.isFocus ? "100%" : "0")};
  height: 1.2px;
  background-color: ${(props) => props.theme.colors.primary};
  transition: 0.4s;
  @media (min-width: 768px) {
    display: none;
  }
`;
