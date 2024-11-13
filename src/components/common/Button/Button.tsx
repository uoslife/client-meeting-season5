import Text from '../Text';
import { ColorsType } from '../../../lib/types';
import S from './style';

export interface ButtonProps {
  buttonType: 'primary' | 'secondary';
  disabled?: boolean;
  children: string;
}

const Button = ({ buttonType, disabled = false, children }: ButtonProps) => {
  const textColor = (
    buttonType: ButtonProps['buttonType'],
    disabled: ButtonProps['disabled'],
  ): ColorsType => {
    if (disabled) {
      return 'Blue20';
    }
    switch (buttonType) {
      case 'primary':
        return 'White';
      case 'secondary':
        return 'Red60';
      default:
        return 'White';
    }
  };

  return (
    <S.Wrapper type="button" buttonType={buttonType} disabled={disabled}>
      <Text
        typograph="bodyMediumMedium"
        color={textColor(buttonType, disabled)}
      >
        {children}
      </Text>
    </S.Wrapper>
  );
};

export default Button;
