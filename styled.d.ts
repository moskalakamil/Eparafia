import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      inputPrimary: string;
      inputSecondary: string;
      inputFocused: string;
    };
    fontSizes: {
      small: { mobile: string; pc: string };
      medium: { mobile: string; pc: string };
      large: { mobile: string; pc: string };
      xlarge: { mobile: string; pc: string };
    };
    fontWeights: {
      large: number;
      xlarge: number;
    };
  }
}
