import { useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { BlackScreen } from '../components/common/BlackScreen/BlackScreen';
import BottomSheet from '../components/common/BottomSheet/BottomSheet';
import S from '../components/common/BottomSheet/style';

export interface UseBottomSheetPropsType {
  title: string;
  description: string;
  mainButtonText: string;
  mainButtonDisabled?: boolean;
  mainButtonCallback: () => void;
  isSideButton?: boolean;
  sideButtonText?: string;
  sideButtonDisabled?: boolean;
  sideButtonCallback?: () => void;
}

interface UseBottomSheetReturn {
  render: (children: ReactNode) => ReactNode;
  open: () => void;
  close: () => void;
  setIsPending: Dispatch<SetStateAction<boolean>>;
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
}: UseBottomSheetPropsType): UseBottomSheetReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setIsPending(false);
  };

  const onClickButton = (buttonCallback: () => void) => {
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
    mainButtonCallback: () => onClickButton(mainButtonCallback),
    isSideButton,
    sideButtonText,
    sideButtonDisabled,
    sideButtonCallback: () => onClickButton(sideButtonCallback),
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

  return { render, open, close, setIsPending };
};

export default useBottomSheet;
