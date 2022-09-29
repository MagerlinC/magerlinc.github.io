import React, { ReactNode } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";

export enum TextVariant {
  PAGEHEADER,
  HEADER,
  BODY,
}

const getStyleForVariant = (variant: TextVariant, theme: DefaultTheme) => {
  switch (variant) {
    case TextVariant.PAGEHEADER:
      return theme.typography.textVariants.pageHeader;
    case TextVariant.HEADER:
      return theme.typography.textVariants.header;
    case TextVariant.BODY:
      return theme.typography.textVariants.body;
  }
};

const TextWrapper = styled.p``;

type TextProps = {
  variant: TextVariant;
  children: ReactNode;
};
const TextComponent: React.FC<TextProps> = ({ variant, children }) => {
  const theme = useTheme();
  return (
    <TextWrapper style={getStyleForVariant(variant, theme)}>
      {children}
    </TextWrapper>
  );
};
export default TextComponent;
