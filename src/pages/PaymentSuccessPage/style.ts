import styled from 'styled-components';
import { COLORS } from '../../lib/constants';
import finish from '../../lib/assets/images/finish.png';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${COLORS.Blue2};
    background-image: url(${finish});
    background-position: center;
    background-size: contain;
  `,
  GradientText: styled.span`
    text-align: center;
    font-family: Pretendard;
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
