import styled from 'styled-components';

import { COLORS } from '../../lib/constants';

export const S = {
  SplashPageContainer: styled.div`
    position: relative
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${COLORS.Red60};
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 168px);
  `,
  HeartWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 6px;

    margin-bottom: 68px;
  `,
  BodyWrapper: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
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
    line-height: inherit;
  `,
  ButtonWrapper: styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 148px;
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
