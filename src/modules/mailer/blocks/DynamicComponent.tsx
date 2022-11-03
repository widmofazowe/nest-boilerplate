import * as React from 'react';
import { ContentBlock } from './ContentBlock';

const Components = {
  contentBlock: ContentBlock,
};

export const DynamicComponent = ({ block }) => {
  const Component = Components[block.component];

  if (Component) {
    return <Component {...block} />;
  }

  return <span>Unknown component {block.component}</span>;
};
