import Text from '../../components/common/Text';
// import settings from '../../lib/assets/icon/settings.svg';
import { useNavigate } from 'react-router-dom';
// import MainBUttonWrapper from '../../components/feature/MainButtonWrapper/MainButtonWrapper';
import { S } from './style';
import snowman from '../../lib/assets/images/main-snowman-img.png';
import snowmanIcon from '../../lib/assets/images/main-snowman-icon.png';
// import { useGetUserStatus } from '../../hooks/api/useUser';
import arrowRed from '../../lib/assets/icon/arrow_red.svg';

const MainPage = () => {
  const navigate = useNavigate();
  // const userStatus = useGetUserStatus();

  return (
    <S.Background>
      <S.Wrapper className="layout-padding">
        <div style={{ minHeight: 'calc(100vh - 40px)' }}>
          <S.TopBar>
            <Text color={'Blue50'} typograph={'bodyMediumSemiBold'}>
              시대팅 시즌5
            </Text>
          </S.TopBar>
          <S.MainText>
            <S.GradientText>
              {`함께 눈 맞을 짝이\n공개되었어요!`}
              <img src={snowmanIcon} width={30} />
            </S.GradientText>
          </S.MainText>

          <S.ResultButtonWrapper>
            <S.ResultButton
              onClick={() => navigate('/auth/final/letter?type=personal')}
            >
              <Text color={'Blue90'} typograph={'titleLarge'}>
                1대1
              </Text>
              <S.RightTextWrapper>
                <Text color={'Red60'} typograph={'bodyLargeMedium'}>
                  매칭결과 확인하기
                </Text>
                <img src={arrowRed} width={12} height={12} />
              </S.RightTextWrapper>
            </S.ResultButton>
            <S.ResultButton
              onClick={() => navigate('/auth/final/letter?type=group')}
            >
              <Text color={'Blue90'} typograph={'titleLarge'}>
                3대3
              </Text>
              <S.RightTextWrapper>
                <Text color={'Red60'} typograph={'bodyLargeMedium'}>
                  매칭결과 확인하기
                </Text>
                <img src={arrowRed} width={12} height={12} />
              </S.RightTextWrapper>
            </S.ResultButton>
            <S.ResultButton>
              <Text color={'Blue90'} typograph={'titleLarge'}>
                신청 정보를 찾을 수 없어요😢
              </Text>
            </S.ResultButton>
          </S.ResultButtonWrapper>

          <S.Snowman>
            <img src={snowman} width={312} />
          </S.Snowman>
        </div>
        <div
          style={{
            height: 40,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Text
            color={'Blue40'}
            typograph={'labelMediumMedium'}
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() =>
              window.open(import.meta.env.VITE_TERMS_OF_USE_LINK, '_blank')
            }
          >
            시대팅 이용약관 확인하기
          </Text>
        </div>
      </S.Wrapper>
    </S.Background>
  );
};
export default MainPage;
