import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  CheckLabel: styled.label`
    position: relative;
  `,

  CheckButton: styled.span`
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: ${COLORS.White};
  `,
  CheckInput: styled.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    z-index: 1;

    &:checked + span {
      background: ${COLORS.Red60};
      border: 0px;
    }

    &:not(:checked) + span {
      border: 0.833px solid ${COLORS.Blue20};
    }
  `,
};
