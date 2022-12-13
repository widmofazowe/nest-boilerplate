import * as React from 'react';

import { Cell } from '../../components/Cell/Cell';
import { Container } from '../../components/Container/Container';
import { Row } from '../../components/Row/Row';
import { H3, H4, P } from '../../styles/typography';
import { spacings } from '../../styles/variables';
import * as styles from './NextSteps.styles';

export const NextSteps = ({ label, steps }) => {
  return (
    <>
      <Container width="100%">
        <Row>
          <Cell width="100%" padding={`${spacings.l} 0 0`}>
            <H3>{label}</H3>
          </Cell>
        </Row>
      </Container>

      <Container width="100%">
        {steps?.map((s, index) => (
          <Row key={s.label}>
            <Cell width="10%" padding={`${spacings.l} 0`}>
              <styles.BulletPoint>{index + 1}</styles.BulletPoint>
            </Cell>
            <Cell padding={`${spacings.l} ${spacings.m}`}>
              <H4>{s.label}</H4>
              <P>{s.content}</P>
            </Cell>
          </Row>
        ))}
      </Container>
    </>
  );
};
