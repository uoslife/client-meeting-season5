import Text from '../Text';
import { ReactNode } from 'react';
import S from './style';

export interface ToastPropsType {
  isOpen: boolean;
  text: string;
  onClick: () => void;
}

const Toast = ({ isOpen, text, onClick }: ToastPropsType): ReactNode => {
  return (
    <S.ToastBox isOpen={isOpen} onClick={onClick}>
      <Text color={'White'} typograph={'bodyMediumMedium'}>
        {text}
      </Text>
    </S.ToastBox>
  );
};
export default Toast;
