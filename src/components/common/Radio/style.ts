import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  RadioLabel: styled.label`
    display: flex;
    flex: 1 0;
    position: relative;
  `,

  RadioButton: styled.span`
    position: relative;
    font-size: 2rem;
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid ${COLORS.Blue10};
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
      border: 1.5px solid ${COLORS.Red60};
      color: ${COLORS.Red60};
      background: ${COLORS.Red2};
    }

    &:not(:checked) + span {
      border: 1px solid ${COLORS.Blue10};
      color: ${COLORS.Blue40};
    }
  `,
};
