import Text from '../../common/Text';
import arrowFront from '../../../lib/assets/icon/arrow-front.svg';
import arrowFrontRed from '../../../lib/assets/icon/arrow-front-red.svg';
import S from './style';
import { useNavigate } from 'react-router-dom';

interface MainButtonWrapperPropsType {
  isPersonalComplete: boolean;
  isGroupComplete: boolean;
}

const MainBUttonWrapper = ({
  isPersonalComplete,
  isGroupComplete,
}: MainButtonWrapperPropsType) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Button
        onClick={() => {
          if (!isPersonalComplete) navigate('/auth/detail/personal');
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text
            color={'Blue90'}
            typograph={'titleLarge'}
            style={{ fontWeight: 600 }}
          >
            1대1
          </Text>
          {isPersonalComplete && (
            <Text
              color={'Blue40'}
              typograph={'labelMediumMedium'}
              style={{ fontWeight: 600 }}
            >
              (완료)
            </Text>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isPersonalComplete ? (
            <Text color={'Blue40'} typograph={'bodyLargeMedium'}>
              신청 정보 확인
            </Text>
          ) : (
            <Text color={'Red60'} typograph={'bodyLargeMedium'}>
              신청하기
            </Text>
          )}

          <img
            src={isPersonalComplete ? arrowFront : arrowFrontRed}
            alt="arrow-front"
            width={20}
            height={20}
          />
        </div>
      </S.Button>
      <S.Button
        onClick={() => {
          if (!isGroupComplete) navigate('/auth/payment-test');
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text
            color={'Blue90'}
            typograph={'titleLarge'}
            style={{ fontWeight: 600 }}
          >
            3대3
          </Text>
          {isGroupComplete ? (
            <Text color={'Blue40'} typograph={'bodyLargeMedium'}>
              신청 정보 확인
            </Text>
          ) : (
            <Text color={'Red60'} typograph={'bodyLargeMedium'}>
              신청하기
            </Text>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text
            color={isGroupComplete ? 'Blue40' : 'Red60'}
            typograph={'bodyLargeMedium'}
          >
            신청하기
          </Text>
          <img
            src={isGroupComplete ? arrowFront : arrowFrontRed}
            alt="arrow-front"
            width={20}
            height={20}
          />
        </div>
      </S.Button>
    </S.Wrapper>
  );
};
export default MainBUttonWrapper;
