import Text from '../../common/Text';
import arrowFront from '../../../lib/assets/icon/arrow-front.svg';
import arrowFrontRed from '../../../lib/assets/icon/arrow-front-red.svg';
import S from './style';
import { useNavigate } from 'react-router-dom';

interface MainButtonWrapperPropsType {
  isPersonalComplete: 'NOT_CREATED' | 'JUST_CREATED' | 'COMPLETED';
  isGroupComplete: 'NOT_CREATED' | 'JUST_CREATED' | 'COMPLETED' | 'JOINED';
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
          if (isPersonalComplete !== 'COMPLETED') {
            navigate('/auth/detail/personal');
          }
          navigate('/auth/result/personal');
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
          {isPersonalComplete === 'COMPLETED' && (
            <Text
              color={'Blue40'}
              typograph={'labelMediumMedium'}
              style={{ fontWeight: 500 }}
            >
              (완료)
            </Text>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isPersonalComplete === 'COMPLETED' ? (
            <Text color={'Blue40'} typograph={'bodyLargeMedium'}>
              신청 정보 확인
            </Text>
          ) : (
            <Text color={'Red60'} typograph={'bodyLargeMedium'}>
              신청하기
            </Text>
          )}

          <img
            src={
              isPersonalComplete === 'COMPLETED' ? arrowFront : arrowFrontRed
            }
            alt="arrow-front"
            width={20}
            height={20}
          />
        </div>
      </S.Button>
      <S.Button
        onClick={() => {
          if (isGroupComplete !== 'COMPLETED') navigate('/auth/invite');
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
          {isGroupComplete === 'COMPLETED' && (
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
          {/* {isGroupComplete === 'COMPLETED' ? (
            <Text color={'Blue40'} typograph={'bodyLargeMedium'}>
              신청 정보 확인
            </Text>
          ) : (
            <Text color={'Red60'} typograph={'bodyLargeMedium'}>
              신청하기
            </Text>
          )} */}
          {isGroupComplete === 'JOINED' ? (
            <Text color={'Blue40'} typograph={'bodyLargeMedium'}>
              팅장이 진행중..
            </Text>
          ) : isGroupComplete === 'COMPLETED' ? (
            <Text color={'Blue40'} typograph={'bodyLargeMedium'}>
              신청 정보 확인
            </Text>
          ) : (
            <Text color={'Red60'} typograph={'bodyLargeMedium'}>
              신청하기
            </Text>
          )}

          <img
            src={
              isGroupComplete === 'COMPLETED' || isGroupComplete === 'JOINED'
                ? arrowFront
                : arrowFrontRed
            }
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
