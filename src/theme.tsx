import { DefaultTheme } from "styled-components";

const primaryColor = "#10101a";
const primaryLight = "rgba(35,37,49,.5)";
const secondaryColor = "#8000ff";
const tertiaryTextColor = "hsl(333deg, 100%, 52%)";

export const theme: DefaultTheme = {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    gradient: `linear-gradient(200deg, ${primaryLight},${primaryColor})`,
    gradientAccent: `linear-gradient(${primaryColor}, ${secondaryColor})`,
    textPrimary: "#ffffff",
    textSecondary: "#000000",
    textTertiary: tertiaryTextColor,
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "32px",
  },
  borderRadius: {
    small: "4px",
    medium: "6px",
    large: "8px",
  },
  boxshadows: {
    medium: "8px 8px 19px -7px rgba(0,0,0,0.67)",
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
