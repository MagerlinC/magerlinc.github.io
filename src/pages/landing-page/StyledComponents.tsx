import styled from "styled-components";
import { CardWrapper } from "../../components/Card";

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  .parallax__layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .parallax__layer--base {
    transform: translateZ(0);
  }
  .parallax__layer--back {
    transform: translateZ(-1px) scale(2);
  }
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeroImage = styled.img`
  height: 350px;
`;

export const LandingPageHeader = styled.div`
  ${({ theme }) => `
        position: relative;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.large};
        align-items: center;
        justify-content: center;
        background: linear-gradient(${theme.colors.primary}, ${theme.colors.primary});
    `}
`;

export const LandingPageText = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.large};
  `}
`;

export const LandingPageContents = styled.div`
  ${({ theme }) => `
        position: relative;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.xlarge};
        flex: 1;
        background: ${theme.colors.secondary};
        align-items: center;
        ${CardWrapper}:nth-child(odd) {
          margin-left: 30%;
          margin-right: 0;
        }
         ${CardWrapper}:nth-child(even) {
          margin-right: 30%;
          margin-left: 0;
        }
    `}
`;

export const ProjectsList = styled.div`
  ${({ theme }) => `
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: ${theme.spacing.xlarge};
       
    `}
`;

export const ProjectLine = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    position: absolute;
    flex: 1;
    min-height: 100%;
    width: 24px;
    transform: translateY(-5vh);
    background: ${theme.colors.gradientAccent};
    border-radius: ${theme.borderRadius.medium};
  `}
`;
