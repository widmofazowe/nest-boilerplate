import styled from 'styled-components';
import { Cell } from '../../components/Cell/Cell';
import * as styles from '../../components/Container/Container.styles';
import { H2, P } from '../../styles/typography';
import { breakpoints, colors } from '../../styles/variables';

export const TitleH2 = styled(H2)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${colors.primary};
`;

export const TextP = styled(P)`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const ContentBlock = styled(Cell)`
  @media ${breakpoints.mobile} {
    display: block;
  }
`;

export const RTLTable = styled(styles.Table)`
  @media ${breakpoints.desktop} {
    direction: rtl;
  }
`;
