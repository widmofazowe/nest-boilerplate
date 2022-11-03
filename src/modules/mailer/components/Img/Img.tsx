import * as React from 'react';

interface Props {
  src?: string;
  alt?: string;
}

export const Img: React.FC<Props> = ({ src, alt }) => {
  return <img src={src || 'https://via.placeholder.com/300'} alt={alt} />;
};
