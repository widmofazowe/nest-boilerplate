import * as React from 'react';

import { Cell } from '../Cell/Cell';
import { Container } from '../Container/Container';
import { Row } from '../Row/Row';
import * as styles from './Header.styles';

interface Props {
  logoUrl?: string;
  logoText?: string;
  loginUrl?: string;
  loginPhrase?: string;
}

export const Header: React.FC<Props> = ({ logoUrl, logoText, loginUrl = '/login', loginPhrase = 'Login' }) => {
  return (
    <Container width="100%">
      <Row>
        {logoUrl && (
          <Cell align="left" vAlign="middle" padding="0 0 20px 0">
            <img src={logoUrl} style={{ height: '24px' }} />
            <span style={{ verticalAlign: 'super' }}>{logoText}</span>
          </Cell>
        )}
        <Cell align="right" vAlign="middle" padding="0 0 20px 0">
          <styles.LoginLink href={loginUrl}>{loginPhrase}</styles.LoginLink>
        </Cell>
      </Row>
    </Container>
  );
};
