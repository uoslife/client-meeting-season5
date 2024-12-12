import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  GradientText: styled.span`
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.6px;
    background: var(
      --Concept-Color,
      linear-gradient(95deg, #4d6598 -0.68%, #ae1b2e 84.01%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
};
export default S;
