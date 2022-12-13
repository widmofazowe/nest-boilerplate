import * as React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../styles/variables';

export interface TableCellProps {
  column?: number;
  height?: string;
  width?: string;
  vAlign?: string;
  align?: 'left' | 'right' | 'center';
  border?: number;
  children: JSX.Element | JSX.Element[] | string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  maxWidth?: string;
  borderBottom?: string;
}

export const TableCell = styled.td.attrs({ border: 0 })<TableCellProps>`
  height: ${props => props.height};
  width: ${props => {
    if (props.width) {
      return props.width;
    }

    if (props.column) {
      return `${100 / props.column - 1}%`;
    }

    return '';
  }};
  vertical-align: ${props => props.vAlign};
  text-align: ${props => props.align};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  max-width: ${props => props.maxWidth};
  color: ${props => props.color};
  border-bottom: ${props => props.borderBottom};

  ${props => {
    if (!props.column) {
      return '';
    }

    return `
      @media ${breakpoints.mobile} {
        width: 100% !important;
        display: block !important;
      }`;
  }}
`;
