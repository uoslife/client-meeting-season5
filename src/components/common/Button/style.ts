import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
import { COLORS } from '../../../lib/constants';

const S = {
  Wrapper: styled.button<Pick<ButtonProps, 'buttonType'>>`
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
        default:
          return COLORS.Red60;
      }
    }};

    color: ${(props) => {
      switch (props.buttonType) {
        case 'primary':
          return COLORS.White;
        case 'secondary':
          return COLORS.Red60;
        default:
          return COLORS.White;
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
