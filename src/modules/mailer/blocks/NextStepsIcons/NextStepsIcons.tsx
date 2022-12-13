import * as React from 'react';
import { Cell } from '../../components/Cell/Cell';
import { Container } from '../../components/Container/Container';
import { Row } from '../../components/Row/Row';
import { P } from '../../styles/typography';
import { spacings } from '../../styles/variables';
import { StyledH3 } from './NextStepsIcons.styles';

interface Props {
  label: string;
  steps: { label: string; content: string; image: string }[];
}

export const NextStepsIcons: React.FC<Props> = ({ label, steps }) => {
  return (
    <>
      <Container width="100%">
        <Row>
          <Cell width="100%" padding={`${spacings.l} 0 0`}>
            <StyledH3>{label}</StyledH3>
          </Cell>
        </Row>
      </Container>

      <Container width="100%">
        {steps?.map(s => (
          <Row key={s.label}>
            <Cell width="10%" padding={`${spacings.l} 0`} vAlign="top">
              <img src={s.image} alt={s.label} />
            </Cell>
            <Cell padding={`${spacings.l} ${spacings.m}`}>
              <StyledH3>{s.label}</StyledH3>
              <P>{s.content}</P>
            </Cell>
          </Row>
        ))}
      </Container>
    </>
  );
};
