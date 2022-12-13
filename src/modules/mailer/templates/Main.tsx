import * as React from 'react';
import config from 'src/config';
import styled from 'styled-components';
import { DynamicComponent } from '../blocks/DynamicComponent';

import { Cell } from '../components/Cell/Cell';
import { Container } from '../components/Container/Container';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Img } from '../components/Img/Img';
import { Row } from '../components/Row/Row';
import { MergeVarsContext } from '../context/merge-vars';
import { MAX_WIDTH } from '../styles/variables';

export const Body = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  -ms-text-size-adjust: 100%;
  background-color: #fff;
`;

export const PreviewText = styled.span`
  display: none;
  font-size: 0;
  line-height: 0;
  max-height: 0;
  max-width: 0;
  overflow: hidden;
  visibility: hidden;
  mso-hide: all;
`;

interface Props {
  content: { subject?: string; blocks: any[] };
  mainImage?: string;
  mergeVars?: any;
}

export const Main = ({ content, mainImage, mergeVars }: Props) => {
  return (
    <MergeVarsContext.Provider value={mergeVars}>
      <html>
        <head>
          <meta name="color-scheme" content="only" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="x-apple-disable-message-reformatting" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" {...{ crossorigin: true }} />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
        </head>
        <Body>
          <PreviewText>{content.subject || ''}</PreviewText>
          <Container align="center">
            <Row>
              <Cell align="center">
                <Container maxWidth={`${MAX_WIDTH}px`}>
                  <Row>
                    <Cell padding="20px 0">
                      <Container align="left" vAlign="center" cellPadding="0">
                        <Row>
                          <Cell width="100%">
                            <Header />
                          </Cell>
                        </Row>
                        <Row>
                          <Cell>{mainImage && <Img />}</Cell>
                        </Row>
                        <>
                          {content.blocks.map(block => (
                            <Row>
                              <Cell>
                                <DynamicComponent block={block} />
                              </Cell>
                            </Row>
                          ))}
                        </>
                      </Container>
                      <Footer logo={`${config.appUrl}/static/logo.png`} copyright="Spectral Services" />
                    </Cell>
                  </Row>
                </Container>
              </Cell>
            </Row>
          </Container>
        </Body>
      </html>
    </MergeVarsContext.Provider>
  );
};
