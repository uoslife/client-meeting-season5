import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import { S } from './style';
import logout from '../../lib/assets/icon/logout.svg';
import { useNavigate } from 'react-router-dom';

const Waiting = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.MainContainer className="layout-padding">
        <S.ProductWrapper>
          <S.ContentWrapper>
            <Text
              typograph={'headlineMedium'}
              color={'Blue90'}
              style={{ fontWeight: 700 }}
            >
              팅장이 진행중..
            </Text>
            <S.TextWrapper>
              <Text
                typograph={'bodyMediumMedium'}
                color={'Blue70'}
                style={{ fontWeight: 500 }}
              >
                팅장이 결제까지 완료하지 않은 채로 이탈하면
              </Text>
              <Text
                typograph={'bodyMediumMedium'}
                color={'Blue70'}
                style={{ fontWeight: 500 }}
              >
                팅원은 다른 미팅에 참여할 수 없어요.
              </Text>
              <Text
                typograph={'bodyMediumMedium'}
                color={'Blue70'}
                style={{ fontWeight: 500 }}
              >
                혹시 서로의 마음이 변해 갈라지게 된다면
              </Text>
              <S.CustomText>
                팅장은{' '}
                <S.CustomStrongText>
                  화면 우측 상단의 *나가기 버튼
                </S.CustomStrongText>
                을 꼭 눌러
              </S.CustomText>
              <Text
                typograph={'bodyMediumMedium'}
                color={'Blue70'}
                style={{ fontWeight: 500 }}
              >
                팅 신청을 취소해 주세요.
              </Text>
            </S.TextWrapper>
          </S.ContentWrapper>
          <S.IconWrapper>
            <img src={logout} width={32} height={32} />
            <Text
              typograph={'labelMediumSemiBold'}
              color={'Blue40'}
              style={{ fontWeight: 600 }}
            >
              *나가기 버튼
            </Text>
          </S.IconWrapper>
        </S.ProductWrapper>
      </S.MainContainer>
      <S.ButtonWrapper className="layout-padding">
        <Button
          buttonColor="primary"
          type="button"
          onClick={() => {
            navigate('/auth/main');
          }}
        >
          완료
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
export default Waiting;
