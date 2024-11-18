import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  FormContainer: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px - 4rem);
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  IndicatorBox: styled.div`
    width: 100%;
    margin: 20px 0px;
  `,
  RadioWrapper: styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    cursor: pointer;

    background: ${COLORS.White};
    border: 1px solid ${COLORS.Blue40};
  `,
  Input: styled.input`
    position: absolute;
    display: flex;
    right: 0;
    opacity: 0;
    &:checked + label {
      background: ${COLORS.Red2};
      border: 1px solid ${COLORS.Red60};
    }
    &:checked + span p {
      color: ${COLORS.Red60};
    }
  `,
};
