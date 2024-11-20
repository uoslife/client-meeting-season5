import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Input: styled.input`
    padding: 12px 0px;

    border: 0px;
    border-bottom: 1px solid ${COLORS.Blue20};

    width: 100%;
    height: 100%;

    font-size: 1.6rem;
    font-weight: 500,
    line-height: 2.4rem
  `,
};
