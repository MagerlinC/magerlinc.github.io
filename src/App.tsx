import styled, { ThemeProvider } from "styled-components";
import TextComponent, { TextVariant } from "./components/Text";
import { theme } from "./theme";
import "./normalize.css";
import LandingPage from "./pages/LandingPage";

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
    color: ${theme.colors.textPrimary};
    font-family: ${theme.typography.fontFamilyMono};
  `}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioApplication>
        <LandingPage />
      </PortfolioApplication>
    </ThemeProvider>
  );
}

export default App;
