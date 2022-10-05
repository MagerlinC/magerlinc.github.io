import React, { ReactNode } from "react";
import styled from "styled-components";
import TextComponent, { TextVariant } from "./Text";
type CardStyleProps = {};
export const CardWrapper = styled.div<CardStyleProps>`
  ${({ theme }) => `
        position: relative;
        display: flex;
        max-width: 70vw;
        gap: ${theme.spacing.large};
        flex-direction: column;
        border-radius: ${theme.borderRadius.large};
        padding: ${theme.spacing.large};
        color: ${theme.colors.textSecondary};
        background: ${theme.colors.neutral};
        box-shadow: ${theme.boxshadows.medium};
        .card-contents-wrapper {
          display: flex;
          flex-direction: row;
          gap; ${theme.spacing.large};
        }
    `}
`;

const Section = styled.div`
  ${({ theme }) => `
        position: relative;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.medium};
        justify-content: space-between;
        line-height: 1.3;
        .banner-title {
          position: absolute;
          top: 4px;
          right: 4px;
          transform: rotate(45deg);
        }
    `}
`;

const LabelList = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.medium};
`}
`;

const CardImage = styled.img`
  ${({ theme }) => `
        border-radius: ${theme.borderRadius.medium};
        width: 36vw;
        margin: 2vw;
    `}
`;

const Label = styled.div`
  ${({ theme }) => `
      padding: ${theme.spacing.medium}; 
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.textTertiary};
      border-radius: ${theme.borderRadius.medium};
      max-width: 12em;
      font-weight: bold;
      text-align: center;
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
  labels?: string[];
  imageSource: string;
  link?: ReactNode;
};
const Card: React.FC<CardProps> = ({
  title,
  description,
  orientation,
  labels,
  imageSource,
  link,
}) => {
  const sectionOne = (
    <Section>
      <TextComponent variant={TextVariant.BODY}>{description}</TextComponent>
      {link && link}
      {labels && (
        <LabelList>
          {labels.map((label) => (
            <Label>
              <TextComponent variant={TextVariant.SMALL}>{label}</TextComponent>
            </Label>
          ))}
        </LabelList>
      )}
    </Section>
  );

  const sectionTwo = (
    <Section>
      <CardImage alt="card-image" src={imageSource}></CardImage>
    </Section>
  );

  return (
    <CardWrapper>
      <TextComponent variant={TextVariant.HEADER}>{title}</TextComponent>
      <div className={"card-contents-wrapper"}>
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
      </div>
    </CardWrapper>
  );
};
export default Card;
