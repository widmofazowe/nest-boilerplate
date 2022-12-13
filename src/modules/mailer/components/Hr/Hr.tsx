import * as React from 'react';
import styled from 'styled-components';
interface Props {
  padding?: string;
  margin?: string;
  border?: string;
}

export const Hr = styled.hr<Props>`
  width: 90%;
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  border: ${props => props.border};
`;
