import * as React from 'react';

import * as styles from './Container.styles';

export interface Props {
  width?: string;
  height?: string;
  vAlign?: string;
  align?: 'left' | 'center' | 'right';
  children: JSX.Element | JSX.Element[];
  padding?: string;
  cellPadding?: string;
  cellSpacing?: string;
  maxWidth?: string;
  id?: string;
}

export const Container: React.FC<Props> = ({
  children,
  align,
  vAlign,
  height,
  width,
  cellPadding,
  cellSpacing,
  maxWidth,
  id,
  padding,
}) => {
  return (
    <styles.Table
      height={height}
      width={width}
      vAlign={vAlign}
      align={align}
      cellPadding={cellPadding}
      cellSpacing={cellSpacing}
      maxWidth={maxWidth}
      id={id}
      padding={padding}
    >
      {children}
    </styles.Table>
  );
};
