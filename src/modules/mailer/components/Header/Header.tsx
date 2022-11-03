import * as React from 'react';

import { Cell } from '../Cell/Cell';
import { Container } from '../Container/Container';
import { Img } from '../Img/Img';
import { Row } from '../Row/Row';
import * as styles from './Header.styles';

export const Header = () => {
  return (
    <Row>
      <Cell width="100%">
        <Container>
          <Row>
            <Cell width="100%" align="left" padding="0 0 20px 0">
              <Img />
            </Cell>
            <Cell width="40%" align="right" vAlign="bottom" padding="0 0 20px 0">
              <styles.LoginLink href="#">
                <span>Login</span>
              </styles.LoginLink>
            </Cell>
          </Row>
        </Container>
      </Cell>
    </Row>
  );
};
