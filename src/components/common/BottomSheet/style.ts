import styled, { css, keyframes } from 'styled-components';

interface WrapperProps {
  isOpen: boolean;
}

import { COLORS } from '../../../lib/constants';

const SlideUp = keyframes`
  from {
    transform: translate(-50%,100%);
  }
  to {
    transform: translate(-50%,0);
  }
`;

const SlideDown = keyframes`
  from {
    transform: translate(-50%,0);
  }
  to {
    transform: translate(-50%,100%);
  }
`;

const S = {
  TotalWrapper: styled.div``,
  Wrapper: styled.div<WrapperProps>`
    position: fixed;
    opacity: 0;
    z-index: 400;
    left: 50%;
    transform: translateX(-50%);
    max-width: 767px;
    width: 100%;
    bottom: 0;
    padding: 36px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    border-radius: 20px 20px 0 0;
    filter: blur(12px);
    background-color: ${COLORS.White};
    pointer-events: none;

    ${(props) =>
      props.isOpen &&
      css`
        opacity: 1;
        filter: blur(0px);
        pointer-events: auto;
      `}

    animation: ${(props) =>
      props.isOpen ? SlideUp : SlideDown} 0.2s ease-in-out forwards;
  `,
};

export default S;
