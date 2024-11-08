import { colors, typographs } from '../constants';

export type colorKey = keyof typeof colors;
export type colorValue = (typeof colors)[colorKey];
export type colorsType = keyof typeof colors;

export type typographsType = keyof typeof typographs;
