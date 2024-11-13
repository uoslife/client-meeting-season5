import Text from '../Text';
import { ColorsType } from '../../../lib/types';
import S from './style';

export interface ButtonProps {
  buttonType: 'primary' | 'secondary' | 'black' | 'yellow';
  disabled?: boolean;
  children: string;
  onClick: () => void;
}

const Button = ({
  buttonType,
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
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
      case 'black':
        return 'Blue90';
      case 'yellow':
        return 'yellow';
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
