import * as React from 'react';

import * as styles from './Link.styles';

interface Props {
  label: string;
  url: string;
  strong: boolean;
}

export const InternalLink: React.FC<Props> = ({ label, url, strong }) => {
  const Wrapper = ({ children }) => (strong ? <strong>{children}</strong> : <>{children}</>);

  return (
    <Wrapper>
      <styles.PrimaryLink href={url}>{label}</styles.PrimaryLink>
    </Wrapper>
  );
};
