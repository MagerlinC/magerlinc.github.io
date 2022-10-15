import React, { useState } from "react";
import Card, { Orientation } from "../../components/Card";
import HeroSwoop from "../../components/HeroSwoop";
import TextComponent, { TextVariant } from "../../components/Text";
import XPPaper from "../../assets/xppaper.png";
import TechReport from "../../assets/techreport.png";
import ThesisGraph from "../../assets/thesis-graph.png";
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
  const [showSubAnimations, setShowSubAnimations] = useState<boolean>(false);
  const useParallaxEffect = false;

  return (
    <LandingPageWrapper>
      <LandingPageHeader
        className={
          useParallaxEffect ? "parallax__layer parallax__layer--back" : ""
        }
      >
        <AppHeader showAnimations={showSubAnimations} />
        <HeroSection>
          <LandingPageText>
            <TextComponent variant={TextVariant.PAGEHEADER}>
              Hi, I'm Mikkel!
            </TextComponent>
            <TextComponent
              onAnimationEnd={() => setShowSubAnimations(true)}
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
        {showSubAnimations && <ProjectLine className={"fadeIn"} />}
        {showSubAnimations && (
          <ProjectsList className={"fadeInDown"}>
            <Card
              title={"Research Paper on Psychological Safety Tools"}
              description={
                "Ever since Google found psychological safety to be the #1 predictor of software team efficiency, I've been on a quest to help Agile software teams work with psychological safety as part of their practice. In 2022, I designed a toolbox of tools for this purpose, and implemented it in four software teams. This work was published at the International Conference on Agile Software Development 2022, where it won the best research paper award."
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
                "As a pre-study to the XP2022 paper, I set out to explore how Psychological Safety could be measured in agile software teams, and if improvements could be made simply be spreading awareness of the concept. I followed two software teams, observed team meetings, held and intervention workshop with the teams, and measured again shortly after, to see the effects."
              }
              orientation={Orientation.RIGHT}
              imageSource={TechReport}
              labels={[
                "Research",
                "Psychological Safety",
                "Agile Software Teams",
              ]}
              link={
                <TextComponent variant={TextVariant.BODY}>
                  <span>You can download the technical report </span>
                  <a href="techreport.pdf">here</a>.
                </TextComponent>
              }
            />
            <Card
              title={
                "Bachelor Thesis: Using Data Visualizations in Agile Planning"
              }
              description={`
                An exploration of how agile planning can be supported by interactive data visualizations. Agile planning is difficult, in part due to the challenges of both producing, analyzing and interpreting relevant data. Current visualizations make trade-offs between richness of data and simplicity, commonly tending towards simplicity and providing lean rationale. We have in this thesis explored how data visualizations for planning purposes can be enrichened on-demand through the use of interactive data visualizations. This project resulted in the implementation of a similar visualization in the project management application Forecast.
              `}
              orientation={Orientation.LEFT}
              imageSource={ThesisGraph}
              labels={["Research", "Agile Planning", "Data Visualization"]}
              link={
                <TextComponent variant={TextVariant.BODY}>
                  <span>You can download the thesis </span>
                  <a href="bachelor.pdf" download>
                    here
                  </a>
                  .
                </TextComponent>
              }
            />
            <Card
              title={"Open Source Drag-and-Drop Framework"}
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
                  <span>, and try a live example </span>
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
