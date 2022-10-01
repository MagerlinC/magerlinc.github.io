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
      gradient: string;
      gradientAccent: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
    boxshadows: {
      medium: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
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
