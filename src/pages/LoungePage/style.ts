import styled from 'styled-components';
import MainBackground from '../../lib/assets/images/main-background-img.png';
import { COLORS } from '../../lib/constants';

export const S = {
  Background: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${COLORS.Blue2};
    width: 100%;
    background-image: url(${MainBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  TopBar: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  `,
  TopbarRight: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  MainText: styled.div`
    margin-top: 4px;
  `,
  GradientText: styled.span`
    font-family: Pretendard-Regular;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
    letter-spacing: -0.7px;
    white-space: pre-wrap;
    background: var(
      --Concept-Color,
      linear-gradient(95deg, #4d6598 -0.68%, #ae1b2e 84.01%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  Period: styled.div`
    margin-top: 12px;
    display: flex;
    gap: 8px;
  `,
  Snowman: styled.div`
    justify-content: center;
    margin-top: 80px;
    display: flex;

    width: 100%;
  `,
  ItemWrapper: styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: ${COLORS.White};
    border-radius: 12px;
    width: 100%;
  `,
  ItemTextWrapper: styled.div`
    color: ${COLORS.Blue90};
    text-align: center;

    font-family: Pretendard-Regular;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.45px;

    align-items: center;
    display: flex;
    gap: 12px;
  `,
};
