import Text from '../../components/common/Text';
import settings from '../../lib/assets/icon/settings.svg';
import { useNavigate } from 'react-router-dom';
import MainBUttonWrapper from '../../components/feature/MainButtonWrapper/MainButtonWrapper';
import { S } from './style';
import snowman from '../../lib/assets/images/main-snowman-img.png';
import snowmanIcon from '../../lib/assets/images/main-snowman-icon.png';
import { useGetUserStatus } from '../../hooks/api/useUser';

const MainPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, refetch } = useGetUserStatus();

  return (
    <S.Background>
      <S.Wrapper className="layout-padding">
        <div style={{ minHeight: 'calc(100vh - 40px)' }}>
          <S.TopBar>
            <Text color={'Blue50'} typograph={'bodyMediumSemiBold'}>
              시대팅 시즌5
            </Text>
            <S.TopbarRight onClick={() => navigate('/auth/edit-profile')}>
              <Text color={'Blue40'} typograph={'bodyMediumMedium'}>
                내 프로필
              </Text>
              <img src={settings} alt="setting" width={14} height={14} />
            </S.TopbarRight>
          </S.TopBar>
          <S.MainText>
            <S.GradientText>
              {`함께 눈 맞을 짝을\n찾아 떠나볼까요?`}
              <img src={snowmanIcon} width={30} />
            </S.GradientText>
          </S.MainText>
          <S.Period>
            <Text color={'Blue90'} typograph={'bodyMediumRegular'}>
              신청기간
            </Text>
            <div style={{ display: 'flex', gap: 4 }}>
              <Text color={'Blue90'} typograph={'bodyMediumSemiBold'}>
                2024.12.4
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumSemiBold'}>
                -
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumSemiBold'}>
                2025.1.1
              </Text>
            </div>
          </S.Period>
          <MainBUttonWrapper
            isPersonalComplete={data?.singleTeamBranch === ''}
            isGroupComplete={data?.tripleTeamBranch === ''}
          />
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
