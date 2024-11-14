import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  RadioLabel: styled.label`
    position: relative;
  `,

  RadioButton: styled.span`
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
  RadioInput: styled.input`
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
