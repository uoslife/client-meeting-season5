import styled, { css } from 'styled-components';
import { ButtonPropsType } from './Button';
import { COLORS } from '../../../lib/constants';

const S = {
  Wrapper: styled.button<Pick<ButtonPropsType, 'buttonType'>>`
    width: 100%;
    padding: 14px 10px;
    outline: none;
    background-color: inherit;

    border: none;
    border-radius: 8px;
    cursor: pointer;

    background-color: ${(props) => {
      switch (props.buttonType) {
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