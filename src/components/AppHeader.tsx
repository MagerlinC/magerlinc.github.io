import React, { ReactNode } from "react";
import styled from "styled-components";
import EmailIcon from "../assets/email-icon.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";
import GithubIcon from "../assets/github-icon.svg";
import CVIcon from "../assets/cv-icon.svg";

type NavigationStyleProps = {};
const NavigationWrapper = styled.div<NavigationStyleProps>`
  ${({ theme }) => `
    width: 100%;
    padding-top: ${theme.spacing.large};
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.large};
    margin-right: ${theme.spacing.large};
    align-items: center;
    justify-content: flex-end;
  `}
`;

const SocialIcon = styled.img`
  width: 4em;
  &:hover {
    opacity: 0.75;
    transition: opacity 0.2s ease-in;
  }
`;

type NavItem = {
  icon: ReactNode;
  href: string;
  download?: boolean;
};

type AppHeaderProps = {};
const AppHeader: React.FC<AppHeaderProps> = () => {
  const navItems: NavItem[] = [
    {
      icon: <SocialIcon alt="Download CV" src={CVIcon} />,
      href: "cv.pdf",
      download: true,
    },
    {
      icon: <SocialIcon alt="email" src={EmailIcon} />,
      href: "mailto:mikkel_ac@hotmail.com",
    },
    {
      icon: <SocialIcon alt="LinkedIn" src={LinkedInIcon} />,
      href: "https://www.linkedin.com/in/mikkel-agerlin-christensen-3a38ba166/",
    },
    {
      icon: <SocialIcon alt="github" src={GithubIcon} />,
      href: "https://github.com/magerlinc",
    },
  ];

  return (
    <NavigationWrapper>
      {navItems.map((navItem) => (
        <a download={!!navItem.download} key={navItem.href} href={navItem.href}>
          {navItem.icon}
        </a>
      ))}
    </NavigationWrapper>
  );
};
export default AppHeader;
