import styled, { css } from 'styled-components';
import { ColorsType, TypographsType } from '../../../lib/types';
import { COLORS, TYPOGRAPHS } from '../../../lib/constants';
export const S = {
  StyledText: styled.p<{
    color: ColorsType;
    typograph: TypographsType;
  }>`
    ${({ color, typograph }) => css`
      color: ${COLORS[color]};
      ${TYPOGRAPHS[typograph]};
    `}
  `,
};
