import styled, { css } from 'styled-components';
import { ToastPropsType } from './Toast';
import { COLORS } from '../../../lib/constants';
type ToastBoxPropsType = Pick<ToastPropsType, 'isOpen'>;

const S = {
  ToastBox: styled.div<ToastBoxPropsType>`
    position: fixed;
    padding: 8px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
    overflow-wrap: break-word;
    overflow: auto;
    white-space: nowrap;
    word-break: break-word;
    top: 50px;

    background: ${COLORS.Blue50};
    border-radius: 8px;

    opacity: 0;
    ${(props) =>
      props.isOpen &&
      css`
        opacity: 1;
      `}
  `,
};

export default S;
