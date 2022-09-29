import React from "react";
import styled from "styled-components";
import HeroSwoop from "../components/HeroSwoop";
import TextComponent, { TextVariant } from "../components/Text";

type LandingPageStyleProps = {};
const LandingPageWrapper = styled.div<LandingPageStyleProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

const LandingPageHeader = styled.div`
  ${({ theme }) => `
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: ${theme.spacing.large};
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
        background: linear-gradient(${theme.colors.primary}, ${theme.colors.primary});
    `}
`;

const LandingPageContents = styled.div`
  ${({ theme }) => `
        display: flex;
        flex-direction: column;
        flex: 1;
        background: ${theme.colors.secondary};
    `}
`;

type LandingPageProps = {};
const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <LandingPageWrapper>
      <LandingPageHeader>
        <TextComponent variant={TextVariant.PAGEHEADER}>
          Hi, I'm Mikkel!
        </TextComponent>
        <TextComponent variant={TextVariant.HEADER}>
          I like things
        </TextComponent>
        <HeroSwoop />
      </LandingPageHeader>
      <LandingPageContents></LandingPageContents>
    </LandingPageWrapper>
  );
};
export default LandingPage;
