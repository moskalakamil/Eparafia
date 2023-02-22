import styled from "styled-components";

interface IProps {
  text: string;
  size?: string;
  weight?: string;
  color?: string;
  underline?: boolean;
  align?: string;
  margin?: string;
}
const TextDetails = (props: IProps) => {
  return (
    <TextStyle
      size={props.size || "medium"}
      weight={props.weight}
      underline={props.underline}
      color={props.color}
      align={props.align}
      margin={props.margin}
    >
      {props.text}
    </TextStyle>
  );
};

export default TextDetails;

interface IStylePropsAttrs {
  size: string;
  color?: string;
  theme: any;
}
interface IStyleProps {
  sizeMobile: string;
  sizePC: string;
  size: any;
  weight?: string;
  underline?: boolean;
  align?: string;
  margin?: string;
}

const TextStyle = styled.p.attrs(
  ({ size, color, theme }: IStylePropsAttrs) => ({
    sizeMobile:
      size === "small"
        ? theme.fontSizes.small.mobile
        : size === "medium"
        ? theme.fontSizes.medium.mobile
        : size === "large"
        ? theme.fontSizes.large.mobile
        : size === "xlarge"
        ? theme.fontSizes.xlarge.mobile
        : theme.fontSizes.medium.mobile,
    sizePC:
      size === "small"
        ? theme.fontSizes.small.pc
        : size === "medium"
        ? theme.fontSizes.medium.pc
        : size === "large"
        ? theme.fontSizes.large.pc
        : size === "xlarge"
        ? theme.fontSizes.xlargepc
        : theme.fontSizes.medium.pc,
    color:
      color === "primary"
        ? theme.colors.primary
        : color === "secondary"
        ? theme.colors.secondary
        : color,
  })
)<IStyleProps>`
  font-size: ${(props) => props.sizeMobile};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  text-decoration: ${(props) =>
    props.underline === true ? "underline" : "none"};
  text-decoration-color: ${(propes) => propes.theme.colors.primary};
  text-underline-offset: 0.26em;
  text-decoration-thickness: 2.5px;

  @media (min-width: 960px) {
    font-size: ${(props) => props.sizePC};
  }
`;
