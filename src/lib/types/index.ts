import { COLORS, TYPOGRAPHS } from '../constants';
import { ERROR_CODE } from './api';

export type ColorsType = keyof typeof COLORS;
export type TypographsType = keyof typeof TYPOGRAPHS;
export type ErrorCodeType = keyof typeof ERROR_CODE;
