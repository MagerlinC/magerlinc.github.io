import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import "./normalize.css";
import "./scroll.css";
import "./animations.css";
import LandingPage from "./pages/landing-page/LandingPage";
import { themeTsukimi } from "./theme_tsukimi";

const PortfolioApplication = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.primary};
    min-height: 100vh;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    color: ${theme.colors.textPrimary};
    font-family: ${theme.typography.fontFamilyMono};
  `}
`;

function App() {
  return (
    <ThemeProvider theme={themeTsukimi}>
      <PortfolioApplication>
        <LandingPage />
      </PortfolioApplication>
    </ThemeProvider>
  );
}

export default App;
