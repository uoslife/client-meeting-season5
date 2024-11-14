import Text from '../Text';
import { ColorsType } from '../../../lib/types';
import S from './style';

export interface ButtonPropsType {
  buttonType: 'primary' | 'secondary' | 'black' | 'yellow' | 'blue';
  disabled?: boolean;
  children: string;
  onClick: () => void;
}

const Button = ({
  buttonType,
  disabled = false,
  children,
  onClick,
}: ButtonPropsType) => {
  const textColor = (
    buttonType: ButtonPropsType['buttonType'],
    disabled: ButtonPropsType['disabled'],
  ): ColorsType => {
    if (disabled) {
      return 'Blue20';
    }
    switch (buttonType) {
      case 'primary':
        return 'White';
      case 'secondary':
        return 'Red60';
      case 'black':
        return 'White';
      case 'blue':
        return 'White';
      case 'yellow':
        return 'Red80';
      default:
        return 'White';
    }
  };

  return (
    <S.Wrapper
      type="button"
      buttonType={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
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
