import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow: scroll;
    gap: 20px;
  `,
  Button: styled.button`
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${COLORS.Blue10};
    border: none;
    width: fit-content;
  `,
  FlexContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
  `,

  CheckboxContainer: styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  `,

  CheckboxWrapper: styled.div`
    span {
      padding: 6px 12px;
      font-size: 1.4rem;
      line-height: 2rem;
    }
  `,
};
