import * as React from 'react';

import { Cell } from '../Cell/Cell';
import { Container } from '../Container/Container';
import { Link, Props as LinkProps } from '../Link/Link';
import { Row } from '../Row/Row';

interface Props {
  logo: string;
  copyright: string;
  links?: LinkProps[];
  social?: {
    icon: string;
    link: string;
  }[];
  bottomLogo?: string;
}

export const Footer: React.FC<Props> = ({ logo, copyright, links, social, bottomLogo }) => {
  return (
    <>
      <Row>
        <Cell width="100%" align="center">
          <Container align="center" width="100%">
            <Row>
              <Cell padding="0 0 20px 0" align="center">
                <img src={logo} />
              </Cell>
            </Row>
          </Container>
        </Cell>
      </Row>

      <Row>
        <Cell align="center" width="100%" padding="0 0 30px 0">
          <Container align="center">
            <Row>
              {social?.map(s => (
                <Cell align="center" padding="0 24px" key={s.link}>
                  <Container align="center">
                    <Row>
                      <Cell align="center">
                        <a href={s.link}>
                          <img src={s.icon} />
                        </a>
                      </Cell>
                    </Row>
                  </Container>
                </Cell>
              ))}
            </Row>
          </Container>
        </Cell>

        <Row>
          <Cell padding="0 0 8px 0" align="center">
            <strong>{copyright}</strong>
          </Cell>
        </Row>

        <>
          {links?.map(l => (
            <Row key={l._uid}>
              <Cell padding="0 0 8px 0" align="center">
                <Link {...l} />
              </Cell>
            </Row>
          ))}
        </>

        <Row>
          <Cell padding="30px 0 20px 0" align="center">
            <img src={bottomLogo} />
          </Cell>
        </Row>
      </Row>
    </>
  );
};
