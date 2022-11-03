import * as React from 'react';

export const Row: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return <tr>{children}</tr>;
};
