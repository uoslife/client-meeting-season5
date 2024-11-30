import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${COLORS.Blue2};
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 4rem);
  `,

  ContentWrapper: styled.div`
    margin-top: 20px;
    width: 100%;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: ${COLORS.White};
    border-radius: 12px;
  `,
  TitleWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
  LogoutText: styled.div`
    margin-top: 20px;

    color: ${COLORS.Blue40};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.35px;

    display: flex;

    align-items: center;
    gap: 2px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};
