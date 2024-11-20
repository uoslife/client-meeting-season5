import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Input: styled.input`
    padding: 12px 0;

    border: 0;
    border-bottom: 1px solid ${COLORS.Blue20};

    width: 100%;
    height: 100%;

    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

    color: ${COLORS.Blue90}

    ::-webkit-input-placeholder {
      color: ${COLORS.Blue20};
    }

    ::-ms-input-placeholder {
      color: ${COLORS.Blue20};
    }

    ::placeholder {
      color: ${COLORS.Blue20};
    }
  `,
};
