import * as React from 'react';

import styled from 'styled-components';
import { colors, spacings } from '../styles/variables';
import { Cell } from '../components/Cell/Cell';
import { Container } from '../components/Container/Container';
import { Row } from '../components/Row/Row';

interface Props {
  text: string;
  url: string;
}

export const PrimaryButton = styled.a`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: ${spacings.l} 0px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  border-radius: 4px;
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  margin-top: 16px;
`;

export const Button: React.FC<Props> = ({ text, url }) => {
  return (
    <Container width="100%">
      <Row>
        <Cell>
          <PrimaryButton href={url}>
            {'<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->'}
            {text}
            {'<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->'}
          </PrimaryButton>
        </Cell>
      </Row>
    </Container>
  );
};
