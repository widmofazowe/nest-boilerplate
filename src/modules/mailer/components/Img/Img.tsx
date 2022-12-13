import * as React from 'react';
import { MAX_WIDTH } from '../../styles/variables';
import styled from 'styled-components';

interface Props {
  src?: string;
  alt?: string;
}

interface ImgProps {
  width?: string;
}

export const StyledImg = styled.img.attrs({})<ImgProps>`
  max-width: ${MAX_WIDTH}px;
  width: ${props => props.width};
`;

export const Img: React.FC<Props> = ({ src, alt }) => {
  return <StyledImg src={src || 'https://via.placeholder.com/300'} alt={alt} />;
};
