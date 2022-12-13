import * as React from 'react';
import styled from 'styled-components';

import { colors, spacings } from '../../styles/variables';

export const BulletPoint = styled.div`
  font-weight: 600;
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: ${spacings.m};
  text-align: center;
  font-size: 30px;
  color: ${colors.primary};
  line-height: 50px;
  mso-line-height-rule: 50px;”
`;
