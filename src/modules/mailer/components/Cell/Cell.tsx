import * as React from 'react';

import * as styles from './Cell.styles';

export interface Props {
  width?: string;
  height?: string;
  vAlign?: string;
  align?: 'left' | 'right' | 'center';
  children: JSX.Element | JSX.Element[] | string;
  column?: number;
  padding?: string;
  margin?: string;
  maxWidth?: string;
  backgroundColor?: string;
  id?: string;
  color?: string;
  borderBottom?: string;
}

export const Cell: React.FC<Props> = ({ children, ...props }) => {
  return <styles.TableCell {...props}>{children}</styles.TableCell>;
};
