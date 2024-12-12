import { useEffect } from 'react';
import S from './style';

export interface BlackScreenPropsType {
  isOpen: boolean;
  onClick: () => void;
}

export const BlackScreen = ({ isOpen, onClick }: BlackScreenPropsType) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return <S.BlackScreenContainer isOpen={isOpen} onClick={onClick} />;
};
