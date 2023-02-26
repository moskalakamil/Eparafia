import styled from "styled-components";

interface Props {
  label: string;
  placeholder: string;
  id: any;
  typeOfInput?: string;
  onInputEntering: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputDetails = (props: Props) => {
  return (
    <>
      <LabelStyle htmlFor={props.id}>{props.label}</LabelStyle>
      <InputStyle
        id={props.id}
        type={props.typeOfInput || "text"}
        placeholder={props.placeholder}
        onInput={props.onInputEntering}
      />
    </>
  );
};

export default InputDetails;

const LabelStyle = styled.label`
  margin: 0;
  font-size: 25px;
  margin: 10px 0;
`;

const InputStyle = styled.input`
  background-color: ${(props) => props.theme.colors.inputPrimary};
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.inputSecondary} !important;
  outline: none;
  padding: 15px;
  margin: 10px 0 25px 0;
  &:focus {
    background-color: ${(props) => props.theme.colors.inputFocused};
  }
`;
