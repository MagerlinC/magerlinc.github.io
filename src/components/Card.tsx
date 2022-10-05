import React from "react";
import styled from "styled-components";
import TextComponent, { TextVariant } from "./Text";
type CardStyleProps = {};
export const CardWrapper = styled.div<CardStyleProps>`
  ${({ theme }) => `
        max-width: 40vw;
        position: relative;
        display: flex;
        gap: ${theme.spacing.large};
        flex-direction: row;
        border-radius: ${theme.borderRadius.large};
        padding: ${theme.spacing.large};
        color: ${theme.colors.textSecondary};
        background: ${theme.colors.neutral};
        box-shadow: ${theme.boxshadows.medium};
    `}
`;

const Section = styled.div`
  ${({ theme }) => `
        position: relative;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.medium};
        justify-content: space-between;
        .banner-title {
          position: absolute;
          top: 4px;
          right: 4px;
          transform: rotate(45deg);
        }
    `}
`;

const CardImage = styled.img`
  ${({ theme }) => `
        border-radius: ${theme.borderRadius.medium};
        width: 500px;

    `}
`;

const Label = styled.div`
  ${({ theme }) => `
      padding: ${theme.spacing.medium}; 
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.textTertiary};
      border-radius: ${theme.borderRadius.medium};
      max-width: 125px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
      {bannerTitle && (
        <Label>
          <TextComponent variant={TextVariant.SMALL}>
            {bannerTitle}
          </TextComponent>
        </Label>
      )}
    </Section>
  );

  const sectionTwo = (
    <Section>
      <CardImage alt="card-image" src={image}></CardImage>
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
