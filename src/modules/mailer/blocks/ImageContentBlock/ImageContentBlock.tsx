import * as React from 'react';
import * as styles from '../../components/Container/Container.styles';
import { Row } from '../../components/Row/Row';
import { ContentBlock, RTLTable, TextP, TitleH2 } from './ImageContentBlock.styles';

interface Props {
  title: string;
  text: string;
  image: string;
  isImageOnLeft: boolean;
}

export const ImageContentBlock: React.FC<Props> = ({ title, text, image, isImageOnLeft }) => {
  const TableComponent = isImageOnLeft ? styles.Table : RTLTable;
  const imagePadding = isImageOnLeft ? '0 16px 0 0' : '0 0 0 16px';
  return (
    <TableComponent>
      <Row>
        <ContentBlock align="center" color="white" padding={imagePadding}>
          <img src={image} style={{ width: '260px', height: '274px' }} />
        </ContentBlock>
        <ContentBlock>
          <TitleH2>{title}</TitleH2>
          <TextP>{text}</TextP>
        </ContentBlock>
      </Row>
    </TableComponent>
  );
};
