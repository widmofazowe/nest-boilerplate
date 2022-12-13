import * as React from 'react';

import { Cell } from '../Cell/Cell';
import { Container } from '../Container/Container';
import { Row } from '../Row/Row';
import * as styles from './Header.styles';

interface Props {
  imageUrl?: string;
  loginUrl?: string;
  loginPhrase?: string;
}

export const Header: React.FC<Props> = ({ imageUrl, loginUrl = '/login', loginPhrase = 'Login' }) => {
  return (
    <Container width="100%">
      <Row>
        {imageUrl && (
          <Cell align="left" padding="0 0 20px 0">
            <img src={imageUrl} />
          </Cell>
        )}
        <Cell align="right" vAlign="bottom" padding="0 0 20px 0">
          <styles.LoginLink href={loginUrl}>{loginPhrase}</styles.LoginLink>
        </Cell>
      </Row>
    </Container>
  );
};
