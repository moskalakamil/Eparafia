import styled, { StyledFunction } from "styled-components";

const TextDetails = (props: {
  text: string;
  size: string;
  weight?: string;

  //   underline: Boolean;
}) => {
  return (
    <TextStyle size={props.size} weight={props.weight}>
      {props.text}
    </TextStyle>
  );
};

export default TextDetails;

interface Props {
  size?: string;
  weight?: string;
}

const TextStyle = styled.p<Props>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;
