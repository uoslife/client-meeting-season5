import styled from 'styled-components';
import SplashBackground from '../../lib/assets/images/splash.png';
import { COLORS } from '../../lib/constants';

export const S = {
  SplashPageContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${COLORS.Red60};
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 148px);
  `,
  bodyWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  TimeWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `,
  TimeTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TimeText: styled.p`
    color: #f6f8fe;
    text-align: center;
    font-family: 'XmasFont';
    font-size: 76px;
    font-weight: 400;
    line-height: normal;
  `,
  ButtonWrapper: styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 128px;
  `,
  Button: styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 14px 10px;
    outline: none;
    background-color: ${COLORS.Blue2};

    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: ${COLORS.Red80};

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.4px;
  `,
};
