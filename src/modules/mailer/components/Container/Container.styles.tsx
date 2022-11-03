import * as React from 'react';
import styled from 'styled-components';

interface TableProps {
  cellPadding?: string;
  cellSpacing?: string;
  height?: string;
  width?: string;
  vAlign?: string;
  align?: string;
  padding?: string;
  maxWidth?: string;
}

export const Table = styled.table.withConfig({ shouldForwardProp: () => true }).attrs<TableProps>(props => ({
  cellpadding: props.cellPadding || 0,
  cellspacing: props.cellSpacing || 0,
}))<TableProps>`
  height: ${props => props.height};
  width: ${props => props.width};
  border-collapse: collapse;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  padding: 0;
  vertical-align: ${props => props.vAlign};
  text-align: ${props => props.align};
  max-width: ${props => props.maxWidth};
`;
