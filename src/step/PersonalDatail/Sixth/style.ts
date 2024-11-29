import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${COLORS.Blue2};
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 128px - 4rem);
    min-height: calc(100dvh - 128px - 4rem);
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ButtonWrapper: styled.div`
    margin-top: 20px;
    width: 100%;
    height: 88px;
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
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  `,
  CustomStrongText: styled.span`
    color: ${COLORS.Red60};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  `,
};
export default S;
