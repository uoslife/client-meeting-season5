import Text from '../Text';
import arrowBack from '../../../lib/assets/icon/arrow-back.svg';
import logout from '../../../lib/assets/icon/logout.svg';
import close from '../../../lib/assets/icon/close.svg';
import more from '../../../lib/assets/icon/more_horizon.svg';
import S from './style';

type rightButtonType = 'close' | 'logout' | 'more' | 'none';

interface HeaderPropsType {
  title: string;
  isGoBackButton?: boolean;
  rightButtonType?: rightButtonType;
  leftButtonCallback?: () => void;
  rightButtonCallback?: () => void;
}

const Header = ({
  title,
  isGoBackButton = true,
  rightButtonType = 'none',
  leftButtonCallback,
  rightButtonCallback,
}: HeaderPropsType) => {
  const rightButtonIcon = (rightButtonType: rightButtonType) => {
    switch (rightButtonType) {
      case 'close':
        return close;
      case 'logout':
        return logout;
      case 'more':
        return more;
    }
  };
  const iconLocationAttribute = () => {
    if (isGoBackButton && rightButtonType !== 'none') return 'space-between';
    if (!isGoBackButton && rightButtonType !== 'none') return 'end';
    if (isGoBackButton && rightButtonType === 'none') return 'start';
    return 'start';
  };
  return (
    <S.Wrapper justifyContent={iconLocationAttribute()}>
      {isGoBackButton && (
        <img
          src={arrowBack}
          alt="뒤로가기"
          width={20}
          height={20}
          style={{ zIndex: 1, cursor: 'pointer' }}
          onClick={leftButtonCallback && leftButtonCallback}
        />
      )}

      <Text
        color={'Blue70'}
        typograph={'titleMedium'}
        style={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
      <div style={{ width: 20, height: 20 }}>
        {rightButtonType !== 'none' && (
          <img
            src={rightButtonIcon(rightButtonType)}
            alt="오른쪽버튼"
            width={20}
            height={20}
            style={{ zIndex: 1, cursor: 'pointer' }}
            onClick={rightButtonCallback && rightButtonCallback}
          />
        )}
      </div>
    </S.Wrapper>
  );
};
export default Header;
