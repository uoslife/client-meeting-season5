import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';
const S = {
  CardContainer: styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  CardWrapper: styled.div`
    padding: 32px 19px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    gap: 24px;
    background: ${COLORS.White};
  `,
  IconWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  `,
  GradientText: styled.p`
    font-family: Pretendard;
    font-size: 20px;
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
  TextWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    line-height: 28px;
    letter-spacing: -0.4px;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ContentText: styled.span`
    color: ${COLORS.Blue90};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 175% */
    letter-spacing: -0.4px;
  `,
  ContentStrongText: styled.span`
    color: ${COLORS.Blue60};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 175% */
    letter-spacing: -0.4px;
  `,
  ContentRedStrongText: styled.span`
    color: ${COLORS.Red60};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 175% */
    letter-spacing: -0.4px;
  `,
  CopyWrapper: styled.div`
    padding: 8px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    background: ${COLORS.Blue2};
  `,
  CopyButton: styled.button`
    padding: 0 6px 0px 6px;
    background: ${COLORS.White};
    border: 1px solid ${COLORS.Blue30};
    border-radius: 4px;
  `,
  CustomText: styled.div`
    color: ${COLORS.Blue70};
    text-align: center;
    font-family: 'XmasFont';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  `,
  PSWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};

export default S;
