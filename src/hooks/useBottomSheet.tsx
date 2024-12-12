import { useState, ReactNode } from 'react';
import { BlackScreen } from '../components/common/BlackScreen/BlackScreen';
import BottomSheet from '../components/common/BottomSheet/BottomSheet';
import S from '../components/common/BottomSheet/style';

export interface UseBottomSheetPropsType {
  title: string;
  description?: string;
  mainButtonText: string;
  mainButtonDisabled?: boolean;
  mainButtonCallback?: () => void;
  isSideButton: boolean;
  sideButtonText?: string;
  sideButtonDisabled?: boolean;
  sideButtonCallback?: () => void;
}

interface UseBottomSheetReturnType {
  render: (children: ReactNode) => ReactNode;
  open: () => void;
  close: () => void;
}

const useBottomSheet = ({
  title,
  description,
  mainButtonText = '선택',
  mainButtonDisabled = false,
  mainButtonCallback = () => {},
  isSideButton = false,
  sideButtonText = '상관 없음',
  sideButtonDisabled = false,
  sideButtonCallback = () => {},
}: UseBottomSheetPropsType): UseBottomSheetReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMainPending, setIsMainPending] = useState<boolean>(false);
  const [isSidePending, setIsSidePending] = useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setIsMainPending(false);
    setIsSidePending(false);
  };

  const onClickButton = (
    buttonCallback: () => void,
    isPending: boolean,
    setIsPending: (isPending: boolean) => void,
  ) => {
    if (!isSideButton && isPending) return;
    setIsPending(true);
    buttonCallback();
    close();
  };

  const bottomSheetProps = {
    isOpen,
    title,
    description,
    mainButtonText,
    mainButtonDisabled,
    mainButtonCallback: () =>
      onClickButton(mainButtonCallback, isMainPending, setIsMainPending),
    isSideButton,
    sideButtonText,
    sideButtonDisabled,
    sideButtonCallback: () =>
      onClickButton(sideButtonCallback, isSidePending, setIsSidePending),
    close,
  };

  const render = (children: ReactNode): ReactNode => {
    return (
      <S.TotalWrapper>
        <BlackScreen isOpen={isOpen} onClick={close} />
        <BottomSheet {...bottomSheetProps}>{children}</BottomSheet>
      </S.TotalWrapper>
    );
  };

  return { render, open, close };
};

export default useBottomSheet;
