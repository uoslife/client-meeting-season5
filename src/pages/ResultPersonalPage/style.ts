import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  MainContainer: styled.div`
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: ${COLORS.Blue2};
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: ${COLORS.White};
    border-radius: 12px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  CustomText: styled.div`
    color: ${COLORS.Blue90};
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  `,
  CustomStrongText: styled.span`
    color: ${COLORS.Red60};
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  `,
  Text: styled.div`
    color: ${COLORS.Blue40};
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.35px;

    display: flex;

    align-items: center;
    gap: 2px;
  `,
};
