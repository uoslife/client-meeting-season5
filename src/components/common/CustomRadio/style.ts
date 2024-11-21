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
    padding: 22px 21.5px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
      background: ${COLORS.Red2};
      p {
        color: ${COLORS.Red60};
      }
    }

    &:not(:checked) + span {
      background: ${COLORS.Blue2};
      color: ${COLORS.Blue40};
    }
  `,
};
