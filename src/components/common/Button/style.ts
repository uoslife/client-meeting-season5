import styled, { css } from 'styled-components';
import { ButtonPropsType } from './Button';
import { COLORS } from '../../../lib/constants';

const S = {
  Wrapper: styled.button<Pick<ButtonPropsType, 'buttonColor'>>`
    width: 100%;
    padding: 14px 10px;
    outline: none;
    background-color: inherit;

    border: none;
    border-radius: 8px;
    cursor: pointer;

    background-color: ${(props) => {
      switch (props.buttonColor) {
        case 'primary':
          return COLORS.Red60;
        case 'secondary':
          return COLORS.Red2;
        case 'black':
          return COLORS.Blue90;
        case 'yellow':
          return COLORS.Yellow;
        case 'blue':
          return COLORS.Blue50;
        case 'white':
          return COLORS.White;
        default:
          return COLORS.Red60;
      }
    }};

    ${(props) => {
      if (props.disabled) {
        return css`
          background-color: ${COLORS.Blue10};
        `;
      }
    }}
  `,
};

export default S;
