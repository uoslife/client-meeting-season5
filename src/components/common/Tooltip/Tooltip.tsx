import { S } from './style';
import close from '../../../lib/assets/icon/close.svg';
interface TooltipType {
  text: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Tooltip = ({ text, isOpen, setIsOpen }: TooltipType) => {
  return (
    <S.TooltipWrapper>
      {isOpen && (
        <S.TooltipContainer>
          <S.TooltipText>{text}</S.TooltipText>
          <img
            src={close}
            alt="Close tooltip"
            onClick={() => setIsOpen(false)}
          />
          <S.TooltipArrow />
        </S.TooltipContainer>
      )}
    </S.TooltipWrapper>
  );
};

export default Tooltip;
