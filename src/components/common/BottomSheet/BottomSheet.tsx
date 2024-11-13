import { ReactNode } from 'react';
import { UseBottomSheetPropsType } from '../../../hooks/useBottomSheet';
import Text from '../Text';
import S from './style';
import Button from '../Button';
import topLine from '../../../lib/assets/icon/topLine.svg';

type BottomSheetPropsType = UseBottomSheetPropsType & {
  isOpen: boolean;
  children: ReactNode;
};

const BottomSheet = ({
  isOpen,
  title,
  isSideButton,
  description,
  children,
  mainButtonText,
  sideButtonText,
  mainButtonDisabled,
  sideButtonDisabled,
  mainButtonCallback,
  sideButtonCallback,
}: BottomSheetPropsType): ReactNode => {
  return (
    <S.Wrapper isOpen={isOpen}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <img src={topLine} alt="topLine" width={36} height={5} />
      </div>

      <Text typograph={'titleMedium'} color={'Blue90'}>
        {title}
      </Text>
      {description && (
        <Text typograph={'bodyMediumMedium'} color={'Blue90'}>
          {description}
        </Text>
      )}

      {children}

      <div style={{ display: 'flex', gap: 8 }}>
        {isSideButton && sideButtonText && (
          <Button
            buttonType="secondary"
            disabled={sideButtonDisabled}
            onClick={sideButtonCallback ? sideButtonCallback : () => {}}
          >
            {sideButtonText}
          </Button>
        )}
        <Button
          buttonType="primary"
          disabled={mainButtonDisabled}
          onClick={mainButtonCallback ? mainButtonCallback : () => {}}
        >
          {mainButtonText}
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default BottomSheet;
