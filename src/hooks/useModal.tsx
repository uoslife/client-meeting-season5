import { useState } from 'react';
import BlackScreen from '../components/common/BlackScreen';
import styled from 'styled-components';
import Modal from '../components/common/Modal';

export interface UseModalPropsType {
  title: string;
  description?: string;
  isSideButton: boolean;
  mainButtonText?: string;
  sideButtonText?: string;
  mainButtonCallback?: () => void;
  sideButtonCallback?: () => void;
}

const useModal = ({
  title,
  description,
  isSideButton,
  mainButtonText = '확인',
  sideButtonText = '취소',
  mainButtonCallback = () => {},
  sideButtonCallback = () => {},
}: UseModalPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => {
    setIsPending(false);
    setIsOpen(false);
  };

  const render = ({
    children = null,
  }: { children?: React.ReactNode } = {}): JSX.Element => {
    const handleButtonClick = () => {
      if (isPending) {
        return;
      }
      setIsPending(true);
      mainButtonCallback();
      close();
    };
    const handleSideButtonClick = () => {
      if (isPending) {
        return;
      }
      setIsPending(true);
      sideButtonCallback();
      close();
    };

    const modalProps = {
      isOpen,
      title,
      description,
      sideButtonText,
      mainButtonText,
      handleButtonClick,
      handleSideButtonClick,
      isSideButton,
      close,
    };

    return (
      <S.Wrapper isOpen={isOpen}>
        <BlackScreen isOpen={isOpen} onClick={close} />
        <Modal {...modalProps}>{children}</Modal>
      </S.Wrapper>
    );
  };

  return { open, close, render };
};
export default useModal;

type ModalWrapperPropsType = {
  isOpen: boolean;
};

const S = {
  Wrapper: styled.div<ModalWrapperPropsType>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    ${(props) => !props.isOpen && 'opacity:0;pointer-events: none;'}
  `,
};
