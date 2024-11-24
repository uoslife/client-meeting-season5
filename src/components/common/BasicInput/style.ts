import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
  Input: styled.input`
    flex: 1;
    resize: none;
    height: 4.9rem;
    padding: 12px 36px 12px 0px;
    outline: none;
    border: 0;
    border-bottom: 1px solid ${COLORS.Blue20};

    width: 100%;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

    color: ${COLORS.Blue90};
    &::placeholder {
      color: ${COLORS.Blue20};
    }
  `,
  ClearButton: styled.div`
    position: absolute;
    right: 0;
    padding: 0 8px;
    background: none;
    border: none;
    font-size: 1.4rem;
    color: ${COLORS.Blue90};
    cursor: pointer;

    &:hover {
      color: ${COLORS.Red50};
    }
  `,
};
