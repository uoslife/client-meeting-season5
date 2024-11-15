import Text from '../Text';
import { ColorsType } from '../../../lib/types';
import S from './style';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonPropsType {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  buttonColor: 'primary' | 'secondary' | 'black' | 'yellow' | 'blue';
  disabled?: boolean;
  children: string;
  onClick: () => void;
}

const Button = ({
  type = 'button',
  buttonColor,
  disabled = false,
  children,
  onClick,
}: ButtonPropsType) => {
  const textColor = (
    buttonColor: ButtonPropsType['buttonColor'],
    disabled: ButtonPropsType['disabled'],
  ): ColorsType => {
    if (disabled) {
      return 'Blue20';
    }
    switch (buttonColor) {
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
      type={type}
      buttonColor={buttonColor}
      disabled={disabled}
      onClick={onClick}
    >
      <Text
        typograph="bodyMediumMedium"
        color={textColor(buttonColor, disabled)}
      >
        {children}
      </Text>
    </S.Wrapper>
  );
};

export default Button;
