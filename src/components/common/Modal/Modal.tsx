import styled, { css } from 'styled-components';
import { UseModalPropsType } from '../../../hooks/useModal';
import { COLORS } from '../../../lib/constants';
import Text from '../Text';
import { ReactNode } from 'react';
import Button from '../Button';

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
          <Button buttonType="secondary" onClick={close}>
            {sideButtonText}
          </Button>
        )}
        {mainButtonText && (
          <Button buttonType="primary" onClick={handleButtonClick}>
            {mainButtonText}
          </Button>
        )}
      </div>
    </S.Wrapper>
  );
};
export default Modal;

type ModalWrapperType = Pick<ModalProps, 'isOpen'>;

const S = {
  Wrapper: styled.div<ModalWrapperType>`
    z-index: 3;
    opacity: 0;
    width: 100%;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    background-color: ${COLORS.White};
    padding: 20px;
    border-radius: 12px;
    pointer-events: none;

    ${(props) =>
      props.isOpen &&
      css`
        opacity: 1;
        pointer-events: auto;
      `}
  `,
};
