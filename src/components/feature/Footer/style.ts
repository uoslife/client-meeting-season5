import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  FooterWrapper: styled.footer`
    display: flex;
    align-items: center;

    gap: 12px;
    width: 100%;
    padding: 20px;
    background: ${COLORS.Grey190};
  `,
  LeftSection: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  RightSection: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
};
