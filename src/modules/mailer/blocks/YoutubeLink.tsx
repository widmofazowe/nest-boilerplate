import * as React from 'react';
import styled from 'styled-components';
import config from '../../../config';
import { Cell } from '../components/Cell/Cell';
import { Container } from '../components/Container/Container';
import { Row } from '../components/Row/Row';

import { MAX_WIDTH } from '../styles/variables';

export const YoutubeLink = ({ image, link }) => {
  const [width, height] = image?.filename?.split('/')?.[5]?.split('x') || [];
  let scale = 1;
  if (width > MAX_WIDTH) {
    scale = width / MAX_WIDTH;
  }
  const finalWidth = width / scale;
  const finalHeight = height / scale;
  const BackgroundImage = styled.div`
    background-image: url(${image.filename});
    background-size: cover;
    background-position: center center;
    width: ${finalWidth}px;
    height: ${height / scale}px;
  `;

  const Opacity = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    width: ${finalWidth}px;
    height: ${finalHeight}px;
    text-align: center;
  `;

  const YoutubeIcon = styled.img`
    width: 300px;
  `;

  return (
    <a href={link}>
      <BackgroundImage>
        <Opacity>
          <Container width={`${finalWidth}px`} height={`${finalHeight}px`} align="center">
            <Row>
              <Cell vAlign="middle">
                <YoutubeIcon src={`${config.appUrl}/static/Youtube.png`} />
              </Cell>
            </Row>
          </Container>
        </Opacity>
      </BackgroundImage>
    </a>
  );
};
