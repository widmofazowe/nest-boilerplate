import styled from 'styled-components';

import { colors, spacings } from './variables';

export interface TypographyProps {
  color?: string;
  padding?: string;
  bold?: any;
}

const fontStyles = props => `
    font-weight: 700;
    margin: 0;
    ${(props.padding && `padding: ${props.padding};`) || ''}
    color: ${getColor(props.color)};
    `;

const getColor = (color?: string) => (color && colors[color]) || color || '#000';

export const H1 = styled.h1.attrs({ color: colors.primary })<TypographyProps>`
  padding: ${spacings.l} 0;
  ${props => fontStyles(props)}
  font-size: 22px;
  line-height: 24px;
  text-align: left;
`;

export const H2 = styled.h2<TypographyProps>`
  padding: ${spacings.m} 0;
  ${props => fontStyles(props)}
  font-size: 20px;
  line-height: 20px;
  text-align: left;
`;

export const H3 = styled.h3<TypographyProps>`
  padding: ${spacings.m} 0;
  ${props => fontStyles(props)}
  font-size: 18px;
  line-height: 20px;
  text-align: left;
`;

export const H4 = styled.h4<TypographyProps>`
  padding: ${spacings.s} 0;
  ${props => fontStyles(props)}
  font-size: 20px;
  text-align: left;
`;

export const H5 = styled.h5<TypographyProps>`
  padding: ${spacings.s} 0;
  text-align: left;
  ${props => fontStyles(props)}
`;

export const H6 = styled.h6<TypographyProps>`
  padding: ${spacings.s} 0;
  text-align: left;
  ${props => fontStyles(props)}
`;

export const P = styled.p<TypographyProps>`
  ${props => props.bold && 'font-weight: 900;'}
  padding: ${spacings.s} 0;
  margin: 0;
  text-align: left;
  line-height: 24px;
  font-size: 16px;
`;

export const OL = styled.ol`
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
`;

export const UL = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
`;
