import styled from 'styled-components';
import { COLORS } from '../../lib/constants';
import Text from '../../components/common/Text';
import settings from '../../lib/assets/icon/settings.svg';
import { useNavigate } from 'react-router-dom';
import MainBUttonWrapper from '../../components/feature/MainButtonWrapper/MainButtonWrapper';
import snowman from '../../lib/assets/images/running-snowman.svg';

const MainPage = () => {
  const navigate = useNavigate();

  return (
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
          <S.GradientText>{`함께 눈 맞을 짝을\n찾아 떠나볼까요?`}</S.GradientText>
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
        <MainBUttonWrapper isPersonalComplete={false} isGroupComplete={false} />
        <S.Snowman>
          <img src={snowman} alt="snowman" width={120} height={150} />
          <img
            src={snowman}
            alt="snowman"
            width={120}
            height={150}
            style={{ transform: 'rotateY(180deg)' }}
          />
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
          onClick={() => window.open('https://example.com/privacy')}
        >
          시대팅 이용약관 확인하기
        </Text>
      </div>
    </S.Wrapper>
  );
};
export default MainPage;

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${COLORS.Blue2};
  `,

  TopBar: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  `,
  TopbarRight: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  MainText: styled.div`
    margin-top: 4px;
  `,
  GradientText: styled.span`
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
    letter-spacing: -0.7px;
    white-space: pre-wrap;
    background: var(
      --Concept-Color,
      linear-gradient(95deg, #4d6598 -0.68%, #ae1b2e 84.01%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  Period: styled.div`
    margin-top: 12px;
    display: flex;
    gap: 8px;
  `,
  Snowman: styled.div`
    justify-content: center;
    margin-top: 100px;
    display: flex;
    gap: 50px;
    width: 100%;
  `,
};
