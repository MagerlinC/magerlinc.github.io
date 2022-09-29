import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const PortfolioApplication = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primary};
    min-height: 100vh;
    height: 100vh;
    overflow-x: hidden;
  `}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioApplication>
        <header className="App-header"></header>
      </PortfolioApplication>
    </ThemeProvider>
  );
}

export default App;
