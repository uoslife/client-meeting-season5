import styled, { css } from 'styled-components';
import { COLORS } from '../../../lib/constants';
import { ModalWrapperPropsType } from './Modal';

const S = {
  Wrapper: styled.div<ModalWrapperPropsType>`
    z-index: 3;
    opacity: 0;
    width: 100%;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    max-width: 440px;

    background-color: ${COLORS.White};
    padding: 20px;
    border-radius: 12px;
    pointer-events: none;

    ${(props) =>
      props.isOpen &&
      css`
        opacity: 1;
        pointer-events: auto;
      `}
  `,
};

export default S;
