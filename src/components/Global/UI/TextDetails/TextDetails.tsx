import styled from "styled-components";
import { primary } from "../../../../style/Colors";
interface Props {
  text: string;
  size: string;
  weight?: number;
  underline?: boolean;
  color?: string;
  margin?: string;
}
const TextDetails = (props: Props) => {
  return (
    <TextStyle
      text=""
      size={props.size}
      weight={props.weight}
      underline={props.underline}
      color={props.color}
      margin={props.margin}
    >
      {props.text}
    </TextStyle>
  );
};

export default TextDetails;

const TextStyle = styled.p<Props>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin-block: ${(props) => props.margin};
  text-decoration: ${(props) =>
    props.underline === true ? "underline" : "none"};
  text-decoration-color: ${primary};
  text-underline-offset: 0.26em;
  text-decoration-thickness: 2.5px;
`;
