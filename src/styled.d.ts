import "styled-components";

declare module "styled-components" {
  type Typography = {
    fontWeight: string;
    fontSize: string;
  };
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    typography: {
      fontFamilyMono: string;
      textVariants: {
        pageHeader: Typography;
        header: Typography;
        body: Typography;
      };
    };
  }
}
