import { DefaultTheme } from "styled-components";

const secondaryColor = "#8000ff";
const tertiaryTextColor = "hsl(333deg, 100%, 52%)";

export const theme: DefaultTheme = {
  colors: {
    primary: "#10101a",
    secondary: secondaryColor,
    textPrimary: "#ffffff",
    textSecondary: "#000000",
    textTertiary: tertiaryTextColor,
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  typography: {
    fontFamilyMono: "Roboto Mono",
    textVariants: {
      pageHeader: {
        fontWeight: "bold",
        fontSize: "3em",
      },
      header: {
        fontWeight: "bold",
        fontSize: "2em",
      },
      body: {
        fontWeight: "regular",
        fontSize: "1em",
      },
    },
  },
};
