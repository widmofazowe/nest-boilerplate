import * as React from 'react';
import { Button } from './Button';
import { ContentBlock } from './ContentBlock';
import { ImageContentBlock } from './ImageContentBlock/ImageContentBlock';
import { NextSteps } from './NextSteps/NextSteps';
import { NextStepsIcons } from './NextStepsIcons/NextStepsIcons';
import { YoutubeLink } from './YoutubeLink';

const Components = {
  button: Button,
  contentBlock: ContentBlock,
  imageContentBlock: ImageContentBlock,
  nextSteps: NextSteps,
  nextStepsIcons: NextStepsIcons,
  youtubeLink: YoutubeLink,
};

export const DynamicComponent = ({ block }) => {
  const Component = Components[block.component];

  if (Component) {
    return <Component {...block} />;
  }

  return <span>Unknown component {block.component}</span>;
};
