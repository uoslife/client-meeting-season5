import { useEffect } from 'react';
import S from './style';

export interface BlackScreenProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BlackScreen = ({ isOpen, onClick }: BlackScreenProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return <S.BlackScreenContainer isOpen={isOpen} onClick={onClick} />;
};
