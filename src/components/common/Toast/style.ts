import styled, { css } from 'styled-components';
import { ToastPropsType } from './Toast';
import { COLORS } from '../../../lib/constants';
type ToastBoxPropsType = Pick<ToastPropsType, 'isOpen'>;

const S = {
  ToastBox: styled.div<ToastBoxPropsType>`
    position: fixed;
    padding: 8px;

    top: 50px;

    background: ${COLORS.Blue70};
    border-radius: 6px;

    opacity: 0;
    ${(props) =>
      props.isOpen &&
      css`
        opacity: 1;
      `}
  `,
};

export default S;
