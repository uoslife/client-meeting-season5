import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px);
    min-height: calc(100dvh - 88px);
    padding-top: 20px;
    display: flex;
    align-items: center;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  ProductWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border-radius: 12px;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 12px;
  `,
  IconWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  CustomText: styled.span`
    color: ${COLORS.Blue70};
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.35px;
  `,
  CustomStrongText: styled.span`
    color: ${COLORS.Red60};
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.35px;
  `,
};
