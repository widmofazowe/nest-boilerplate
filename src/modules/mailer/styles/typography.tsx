import * as React from 'react';
import styled from 'styled-components';

export interface TypographyProps {
  color?: string;
}

const header = `
    font-weight: 700;
    padding-bottom: 16px;
    margin: 0;
    `;

export const H1 = styled.h1<TypographyProps>`
  ${header};
  color: ${props => props.color || '#005DFF'};
  font-size: 24px;
  line-height: 24px;
`;

export const H2 = styled.h2<TypographyProps>`
  color: ${props => props.color || '#005DFF'};
  ${header}
  font-size: 20px;
  line-height: 20px;
`;

export const H3 = styled.h3<TypographyProps>`
  ${header}
  color: ${props => props.color || '#005DFF'};
  font-size: 15px;
  line-height: 20px;
`;

export const H4 = styled.h4<TypographyProps>`
  ${header}
  color: ${props => props.color || '#005DFF'};
`;

export const H5 = styled.h5<TypographyProps>`
  ${header}
  color: ${props => props.color || '#005DFF'};
`;

export const H6 = styled.h6<TypographyProps>`
  ${header}
  color: ${props => props.color || '#005DFF'};
`;

export const P = styled.p<TypographyProps>`
  color: ${props => props.color || '#15212e'};
  padding-bottom: 16px;
  margin: 0;
`;

export const OL = styled.ol`
  margin-top: 0;
  margin-bottom: 0;
`;

export const UL = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
`;
