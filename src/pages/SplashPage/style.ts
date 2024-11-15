import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  SplashPageContainer: styled.div`
    height: 100vh;
    width: 100%;
    background: ${COLORS.Red60};

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  SplashContentWrapper: styled.div`
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 12px;
  `,
  FlexBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TimeText: styled.p`
    color: #fff6dd;
    text-align: center;
    font-family: 'XmasFont';
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.6px;
  `,
};
