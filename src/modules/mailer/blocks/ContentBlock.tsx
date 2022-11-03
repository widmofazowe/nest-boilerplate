import * as React from 'react';
import { Cell } from '../components/Cell/Cell';

import { Container } from '../components/Container/Container';
import { Row } from '../components/Row/Row';

export const ContentBlock = ({ content }) => {
  return (
    <Container width="100%">
      <Row>
        <Cell>{content}</Cell>
      </Row>
    </Container>
  );
};
