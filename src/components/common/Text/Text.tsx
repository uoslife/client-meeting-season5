import { ColorsType, TypographsType } from '../../../lib/types';
import { S } from './style';

export interface TextPropsType
  extends React.HTMLAttributes<HTMLParagraphElement> {
  typograph: TypographsType;
  color: ColorsType;
  children: string;
  style?: React.CSSProperties;
}

const Text = ({
  typograph,
  color,
  children,
  style,
  ...props
}: TextPropsType) => {
  return (
    <S.StyledText color={color} typograph={typograph} style={style} {...props}>
      {children}
    </S.StyledText>
  );
};

export default Text;
