import styled from 'styled-components';

export interface TableProps {
  cellPadding?: string;
  cellSpacing?: string;
  height?: string;
  width?: string;
  vAlign?: string;
  align?: 'left' | 'center' | 'right';
  border?: any;
  padding?: string;
  maxWidth?: string;
  borderRadius?: string;
}

export const Table = styled.table.attrs<TableProps>(props => ({
  cellpadding: props.cellPadding || 0,
  cellspacing: props.cellSpacing || 0,
}))<TableProps>`
  ${props => `border: ${props.border};`}
  padding: ${props => props.padding || 0};
  border-radius: ${props => props.borderRadius || 0};
  height: ${props => props.height};
  width: ${props => props.width};
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  vertical-align: ${props => props.vAlign};
  text-align: ${props => props.align};
  max-width: ${props => props.maxWidth};
`;
