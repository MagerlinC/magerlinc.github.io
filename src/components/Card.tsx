import React from "react";
import styled from "styled-components";
import TextComponent, { TextVariant } from "./Text";
type CardStyleProps = {};
export const CardWrapper = styled.div<CardStyleProps>`
  ${({ theme }) => `
        position: relative;
        display: flex;
        gap: ${theme.spacing.large};
        flex-direction: row;
        border-radius: ${theme.borderRadius.large};
        padding: ${theme.spacing.large};
        background: ${theme.colors.gradient};
        box-shadow: ${theme.boxshadows.medium};
    `}
`;

const Section = styled.div`
  ${({ theme }) => `
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.medium};
    `}
`;

const CardImage = styled.img`
  ${({ theme }) => `
        border-radius: ${theme.borderRadius.medium};
        width: 500px;
    `}
`;

const Banner = styled.div`
  ${({ theme }) => `
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 200px 200px 0;
    border-color: transparent ${theme.colors.secondary} transparent transparent;
    `}
`;

export enum Orientation {
  LEFT,
  RIGHT,
}
type CardProps = {
  title: string;
  description: string;
  orientation: Orientation;
  bannerTitle?: string;
  imageSource: string;
};
const Card: React.FC<CardProps> = ({
  title,
  description,
  orientation,
  bannerTitle,
  imageSource: image,
}) => {
  const sectionOne = (
    <Section>
      <TextComponent variant={TextVariant.HEADER}>{title}</TextComponent>
      <TextComponent variant={TextVariant.BODY}>{description}</TextComponent>
    </Section>
  );

  const sectionTwo = (
    <Section>
      <CardImage alt="card-image" src={image}></CardImage>
      {bannerTitle && <Banner>{bannerTitle}</Banner>}
    </Section>
  );

  return (
    <CardWrapper>
      {orientation === Orientation.LEFT ? (
        <>
          {sectionOne}
          {sectionTwo}
        </>
      ) : (
        <>
          {sectionTwo}
          {sectionOne}
        </>
      )}
    </CardWrapper>
  );
};
export default Card;
