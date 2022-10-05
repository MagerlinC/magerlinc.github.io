import React, { useState } from "react";
import Card, { Orientation } from "../../components/Card";
import HeroSwoop from "../../components/HeroSwoop";
import TextComponent, { TextVariant } from "../../components/Text";
import XPPaper from "../../assets/xppaper.png";
import Headshot from "../../assets/headshot.png";
import {
  LandingPageWrapper,
  LandingPageHeader,
  LandingPageText,
  HeroImage,
  LandingPageContents,
  ProjectLine,
  HeroSection,
  ProjectsList,
} from "./StyledComponents";
import AppHeader from "../../components/AppHeader";

type LandingPageProps = {};
const LandingPage: React.FC<LandingPageProps> = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);

  return (
    <LandingPageWrapper>
      <LandingPageHeader>
        <AppHeader />
        <HeroSection>
          <LandingPageText>
            <TextComponent variant={TextVariant.PAGEHEADER}>
              Hi, I'm Mikkel!
            </TextComponent>
            <TextComponent
              onAnimationEnd={() => setShowProjects(true)}
              className={"typewriter"}
              variant={TextVariant.HEADER}
            >
              Here are some things I've made
            </TextComponent>
          </LandingPageText>
          <HeroImage alt="hero-headshot" src={Headshot} />
        </HeroSection>
        <HeroSwoop />
      </LandingPageHeader>
      <LandingPageContents>
        {showProjects && <ProjectLine />}
        {showProjects && (
          <ProjectsList className={"fadeInDown"}>
            <Card
              title={"XP 2022 Paper"}
              description={"bla bla"}
              orientation={Orientation.LEFT}
              imageSource={XPPaper}
              bannerTitle={"XP2022 Best Paper Award"}
            />
            <Card
              title={"XP 2022 Paper"}
              description={"bla bla"}
              orientation={Orientation.RIGHT}
              imageSource={XPPaper}
            />
            <Card
              title={"XP 2022 Paper"}
              description={"bla bla"}
              orientation={Orientation.LEFT}
              imageSource={XPPaper}
            />
          </ProjectsList>
        )}
      </LandingPageContents>
    </LandingPageWrapper>
  );
};
export default LandingPage;
