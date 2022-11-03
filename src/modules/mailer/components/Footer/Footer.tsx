import * as React from 'react';

import { Cell } from '../Cell/Cell';
import { Container } from '../Container/Container';
import { Img } from '../Img/Img';
import { Row } from '../Row/Row';

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <>
      <Row>
        <Cell width="100%" align="center">
          <Container align="center" width="100%">
            <Row>
              <Cell padding="0 0 20px 0" align="center">
                <Img />
              </Cell>
            </Row>
          </Container>
        </Cell>
      </Row>
      <Row>
        <Cell align="center" width="100%" padding="0 0 30px 0">
          <Container align="center">
            <Row>
              <></>
              {/* {social.map(s => (
                <Cell align="center" padding="0 24px" key={s.link}>
                  <Container align="center">
                    <Row>
                      <Cell align="center">
                        <a href={s.link}>
                          <img src={s.icon.filename} />
                        </a>
                      </Cell>
                    </Row>
                  </Container>
                </Cell>
              ))} */}
            </Row>
          </Container>
        </Cell>
        <Row>
          <Cell padding="0 0 8px 0" align="center">
            <strong>Spectral Services</strong>
          </Cell>
        </Row>
        <Row>
          <Cell padding="0 0 8px 0" align="center"></Cell>
        </Row>
      </Row>
    </>
  );
};
