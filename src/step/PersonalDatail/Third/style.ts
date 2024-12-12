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
    min-height: calc(100dvh - 88px - 4rem);
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
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;

    background: ${COLORS.White};
    border: 1px solid ${COLORS.Blue10};

    input:checked + & {
      background: ${COLORS.Red2};
      border: 1px solid ${COLORS.Red20};
    }

    input:checked + & p {
      color: ${COLORS.Red60};
      font-weight: 600;
    }
    &:has(input:checked) {
      border: 1.5px solid ${COLORS.Red60};
      background: ${COLORS.Red2};
    }
  `,
  RadioButton: styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid ${COLORS.Blue20};
    border-radius: 50%;
    position: relative;

    input:checked + label & {
      border: 1px solid ${COLORS.Red20};
      background: ${COLORS.White};

      &::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        background: ${COLORS.Red60};
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `,

  RadioContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  Input: styled.input`
    position: absolute;
    display: flex;
    right: 0;
    opacity: 0;

    &:checked + label {
      background: ${COLORS.Red2};
      border: 1.5px solid ${COLORS.Red60};
    }
    &:checked + span p {
      color: ${COLORS.Red60};
    }
  `,
};
