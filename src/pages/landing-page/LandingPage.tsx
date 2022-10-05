import React, { useState } from "react";
import Card, { Orientation } from "../../components/Card";
import HeroSwoop from "../../components/HeroSwoop";
import TextComponent, { TextVariant } from "../../components/Text";
import XPPaper from "../../assets/xppaper.png";
import TechReport from "../../assets/techreport.png";
import NPMLogo from "../../assets/npm.png";
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
  const useParallaxEffect = false;

  return (
    <LandingPageWrapper>
      <LandingPageHeader
        className={
          useParallaxEffect ? "parallax__layer parallax__layer--back" : ""
        }
      >
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
      <LandingPageContents
        className={
          useParallaxEffect ? "parallax__layer parallax__layer--base" : ""
        }
      >
        {showProjects && <ProjectLine />}
        {showProjects && (
          <ProjectsList className={"fadeInDown"}>
            <Card
              title={"Research Paper on Psychological Safety Tools"}
              description={
                "In 2022, I published a paper and gave a talk at the International Conference on Agile Software Development, creating and experimenting with tangible tools for agile software teams to work with psychological safety as part of their practice. It won the XP2022 best research paper award."
              }
              orientation={Orientation.LEFT}
              imageSource={XPPaper}
              labels={[
                "Research",
                "Psychological Safety",
                "Agile Software Teams",
              ]}
              link={
                <TextComponent variant={TextVariant.BODY}>
                  <span>You can read the paper </span>
                  <a href="https://link.springer.com/chapter/10.1007/978-3-031-08169-9_6">
                    here
                  </a>
                  <span>, and download the tools </span>
                  <a href="https://addresstheelephant.io/">here</a>.
                </TextComponent>
              }
            />
            <Card
              title={"Empirical Research on Improving Psychological Safety"}
              description={
                "As a pre-study to the XP2022 paper, I set out to explore how Psychological Safety could be measured in agile software teams, and if improvements could be made simply be spreading awareness of the concept. I observed team meetings, held and intervention workshop with the teams, and measured again shortly after, to see the effects."
              }
              orientation={Orientation.RIGHT}
              imageSource={TechReport}
              link={
                <TextComponent variant={TextVariant.BODY}>
                  <span>You can download the technical report here </span>
                  <a href="techreport.pdf">here</a>
                </TextComponent>
              }
            />
            <Card
              title={"Open Source DnD Framework"}
              description={
                "During my time at Forecast, we had a lot of trouble combining virtualization techniques - which was needed for frontend performance - and drag-and-drop libraries. At the time, these two were not compatible, and so we set out to author a library that could handle both. This library is still in production use to this day, and solves this combination of challenges in an efficient and simple manner."
              }
              orientation={Orientation.LEFT}
              imageSource={NPMLogo}
              labels={["Open Source", "Front-end Performance"]}
              link={
                <TextComponent variant={TextVariant.BODY}>
                  <span>You can check it out on NPM </span>
                  <a href="https://www.npmjs.com/package/react-virtualized-dnd">
                    here
                  </a>
                  <span>, and play with a live example </span>
                  <a href="https://forecast-it.github.io/react-virtualized-dnd/">
                    here
                  </a>
                  .
                </TextComponent>
              }
            />
          </ProjectsList>
        )}
      </LandingPageContents>
    </LandingPageWrapper>
  );
};
export default LandingPage;
