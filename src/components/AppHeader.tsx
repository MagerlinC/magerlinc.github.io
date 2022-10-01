import React, { ReactNode } from "react";
import styled from "styled-components";
import EmailIcon from "../assets/email.png";

type NavigationStyleProps = {};
const NavigationWrapper = styled.div<NavigationStyleProps>`
  ${({ theme }) => `
    flex: 1;
    padding-top: ${theme.spacing.large};
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.large};
    align-items: stretch;
  `}
`;

const SocialIcon = styled.img`
  width: 36px;
`;

type NavItem = {
  icon: ReactNode;
  href: string;
};

type NavigationProps = {};
const Navigation: React.FC<NavigationProps> = () => {
  const navItems: NavItem[] = [
    {
      icon: <SocialIcon alt="email" src={EmailIcon} />,
      href: "mailto:mikkel_ac@hotmail.com",
    },
    {
      icon: <SocialIcon alt="LinkedIn" src={EmailIcon} />,
      href: "https://www.linkedin.com/in/mikkel-agerlin-christensen-3a38ba166/",
    },
    {
      icon: <SocialIcon alt="github" src={EmailIcon} />,
      href: "https://github.com/magerlinc",
    },
  ];

  return (
    <NavigationWrapper>
      {navItems.map((navItem) => (
        <a href={navItem.href}>{navItem.icon}</a>
      ))}
    </NavigationWrapper>
  );
};
export default Navigation;
