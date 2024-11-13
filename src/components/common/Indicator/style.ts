import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  IndicatorWrapper: styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
  `,
  inactiveIndicator: styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: ${COLORS.Blue10};
  `,
  activeIndicator: styled.div`
    width: 24px;
    height: 8px;
    border-radius: 4px;
    background: ${COLORS.Red60};
  `,
};
