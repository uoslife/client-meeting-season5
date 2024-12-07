import styled from 'styled-components';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 108px);
    min-height: calc(100dvh - 108px);
    display: table;
  `,
  Wrapper: styled.div`
    display: table-cell;
    vertical-align: middle;
  `,
  IconWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    margin-bottom: 40px;
  `,
  DescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
    margin-top: 20px;
  `,
  CustomText: styled.div`
    background: var(
      --Concept-Color,
      linear-gradient(95deg, #4d6598 -0.68%, #ae1b2e 84.01%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    /* Text_test/Headline L */
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
    letter-spacing: -0.7px;
  `,
};
