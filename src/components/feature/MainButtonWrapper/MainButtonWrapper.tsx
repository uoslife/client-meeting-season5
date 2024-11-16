import Text from '../../common/Text';
import arrowFront from '../../../lib/assets/icon/arrow-front.svg';
import arrowFrontRed from '../../../lib/assets/icon/arrow-front-red.svg';
import S from './style';

interface MainButtonWrapperPropsType {
  isPersonalComplete: boolean;
  isGroupComplete: boolean;
}

const MainBUttonWrapper = ({
  isPersonalComplete,
  isGroupComplete,
}: MainButtonWrapperPropsType) => {
  return (
    <S.Wrapper>
      <S.Button>
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
          <Text
            color={isPersonalComplete ? 'Red60' : 'Blue40'}
            typograph={'bodyLargeMedium'}
          >
            신청하기
          </Text>
          <img
            src={isPersonalComplete ? arrowFrontRed : arrowFront}
            alt="arrow-front"
            width={20}
            height={20}
          />
        </div>
      </S.Button>
      <S.Button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text
            color={'Blue90'}
            typograph={'titleLarge'}
            style={{ fontWeight: 600 }}
          >
            3대3
          </Text>
          {isGroupComplete && (
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
          <Text
            color={isGroupComplete ? 'Red60' : 'Blue40'}
            typograph={'bodyLargeMedium'}
          >
            신청하기
          </Text>
          <img
            src={isGroupComplete ? arrowFrontRed : arrowFront}
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
