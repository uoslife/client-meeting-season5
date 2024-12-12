import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  ApplicantItemWrapper: styled.div`
    width: 100%;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    algin-items: center;

    background: ${COLORS.Blue2};
    border-radius: 8px;
  `,
  TextWrapper: styled.div`
    position: relative;
    display: flex;
    gap: 4px;
    align-items: center;
  `,
  Pill: styled.div`
    font-family: Pretendard-Regular;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.3px;
    padding: 0px 6px;
    display: flex;
    padding: 1px 6px;
    justify-content: center;
    align-items: center;
    background: ${COLORS.Red60};
    color: ${COLORS.White};
    border-radius: 20px;
  `,
};
