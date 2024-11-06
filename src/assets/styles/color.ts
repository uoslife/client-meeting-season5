export const color = {
  Blue2: '#F6F8FE',
  Blue10: '#E8EDFC',
  Blue20: '#C8D1EA',
  Blue30: '#ACB9D5',
  Blue40: '#889BC3',
  Blue50: '#667EB2',
  Blue60: '#4D6599',
  Blue70: '#3C4E77',
  Blue80: '#2B3855',
  Blue90: '#1A2233',
  Red2: '#FDF2F3',
  Red10: '#F7CED4',
  Red20: '#F1A2AC',
  Red30: '#EA7685',
  Red40: '#E34A5E',
  Red50: '#D82239',
  Red60: '#AE1B2E',
  Red70: '#801422',
  Red80: '#540D16',
  Red90: '#28060B',
} as const;

export type ColorKey = keyof typeof color;
export type ColorValue = (typeof color)[ColorKey];
export type Color = typeof color;
