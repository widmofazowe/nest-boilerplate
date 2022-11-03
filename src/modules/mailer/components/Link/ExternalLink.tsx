import * as React from 'react';

import * as styles from './Link.styles';

interface Props {
  label: string;
  url: string;
}

export const ExternalLink: React.FC<Props> = ({ label, url }) => {
  return (
    <styles.PrimaryLink href={url} target="_blank">
      {label}
    </styles.PrimaryLink>
  );
};
