import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  SplashPageContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 120px;

    width: 100%;
    height: 100vh;
    background: ${COLORS.Red60};
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
