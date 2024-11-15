import { UseModalPropsType } from '../../../hooks/useModal';
import Text from '../Text';
import { ReactNode } from 'react';
import Button from '../Button';
import S from './style';

interface ModalProps extends UseModalPropsType {
  isOpen: boolean;
  children: ReactNode;
  handleButtonClick: () => void;
  close: () => void;
}

const Modal = ({
  isOpen,
  title,
  description,
  sideButtonText,
  mainButtonText,
  handleButtonClick,
  isSideButton,
  close,
  children,
}: ModalProps) => {
  return (
    <S.Wrapper isOpen={isOpen}>
      {title && (
        <Text color={'Blue90'} typograph={'titleMedium'}>
          {title}
        </Text>
      )}
      {description && (
        <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
          {description}
        </Text>
      )}
      {children}
      <div style={{ display: 'flex', gap: 8, width: '100%' }}>
        {isSideButton && sideButtonText && (
          <Button buttonColor="secondary" onClick={close}>
            {sideButtonText}
          </Button>
        )}
        {mainButtonText && (
          <Button buttonColor="primary" onClick={handleButtonClick}>
            {mainButtonText}
          </Button>
        )}
      </div>
    </S.Wrapper>
  );
};
export default Modal;

export type ModalWrapperPropsType = Pick<ModalProps, 'isOpen'>;
