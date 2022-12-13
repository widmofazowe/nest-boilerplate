import * as React from 'react';

import * as styles from './Container.styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  id?: string;
}

export const Container: React.FC<Props & styles.TableProps> = ({
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
  border,
  borderRadius,
}) => {
  return (
    <styles.Table
      height={height}
      width={width}
      vAlign={vAlign}
      border={border}
      align={align}
      cellPadding={cellPadding}
      cellSpacing={cellSpacing}
      maxWidth={maxWidth}
      id={id}
      padding={padding}
      borderRadius={borderRadius}
    >
      {children}
    </styles.Table>
  );
};
