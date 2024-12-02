import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  TooltipWrapper: styled.div`
    position: relative;
  `,

  TooltipContainer: styled.div`
    min-width: 180px;
    position: absolute;
    top: -70px;
    right: 0;
    display: flex;
    align-items: center;
    background-color: ${COLORS.Blue50};
    color: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
    opacity: 1;

    transition:
      opacity 0.2s ease,
      transform 0.2s ease;

    &[data-isopen='false'] {
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
  `,
  TooltipText: styled.div`
    color: ${COLORS.White};

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.35px;
  `,
  TooltipArrow: styled.div`
    position: absolute;
    bottom: -18px;
    right: 12px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 18px solid ${COLORS.Blue50};
  `,
};
