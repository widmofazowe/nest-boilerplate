import * as React from 'react';
import styled from 'styled-components';

import { colors, spacings } from '../../styles/variables';

interface Props {
  children?: JSX.Element | JSX.Element[] | string;
  content?: string;
  color: string;
  dotColor?: string;
}

export const Label: React.FC<Props> = ({ children, content, color, dotColor }) => {
  const LabelContainer = styled.span`
    background-color: ${colors[color] || color};
    border-radius: 16px;
    padding: ${spacings.m};
  `;

  const Dot = styled.div`
    background-color: ${(dotColor && colors[dotColor]) || dotColor};
    height: 8px;
    width: 8px;
    margin-right: 8px;
    border-radius: 100px;
    display: inline-block;
    margin-left: ${spacings.s};
    margin-bottom: 1px;
  `;

  return (
    <LabelContainer>
      {dotColor && <Dot />}
      {content || children}
    </LabelContainer>
  );
};
