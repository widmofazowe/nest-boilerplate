import * as React from 'react';

import { ExternalLink } from './ExternalLink';

const LinkComponents = {
  emailExternalLink: ExternalLink,
};

export interface Props {
  component: string;
  children?: JSX.Element;
  [x: string]: any;
}

export const Link: React.FC<Props> = ({ component, children, ...rest }) => {
  if (!component) {
    return <a>{children}</a>;
  }

  const Component = LinkComponents[component];
  if (typeof Component !== 'undefined') {
    return <Component {...rest}>{children}</Component>;
  }

  return (
    <p>
      The link <strong>{component}</strong> has not been created yet.
    </p>
  );
};
