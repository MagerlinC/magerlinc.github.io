import styled from "styled-components";
import { CardWrapper } from "../../components/Card";

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
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
  ${({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacing.medium};
    @media (max-width: 900px) {
      margin-bottom: 24px;
    }
    @media (max-width: 700px) {
      img {
        display: none;
      }
      margin-bottom: 36px;
    }
    @media (max-width: 500px) {
      margin-bottom: 74px;
    }
  `}
`;

export const HeroImage = styled.img`
  height: 20vw;
`;

export const LandingPageHeader = styled.div`
  ${({ theme }) => `
        position: relative;
        padding:  ${theme.spacing.medium};
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
    text-align: center;
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
        ${CardWrapper} {
          margin: 1vw 4vw;
        }
        ${CardWrapper}:nth-child(odd) {
          align-self: flex-end;
        }
         ${CardWrapper}:nth-child(even) {
          align-self: flex-start;
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
    left: 50%;
    flex: 1;
    min-height: 100%;
    width: 24px;
    transform: translateY(-4em) translateX(-50%);
    background: ${theme.colors.gradientAccent};
    border-radius: ${theme.borderRadius.medium};
  `}
`;
