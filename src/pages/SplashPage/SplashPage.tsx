import { S } from './style';
import { useEffect, useState } from 'react';
import { calculateTimeUntilChristmas } from '../../utils/time';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import SmallHeart from '../../lib/assets/images/spalsh-small-img.png';
import BigHeart from '../../lib/assets/images/splash-big-img.png';
import snowmanIcon from '../../lib/assets/images/main-snowman-icon.png';
const SplashPage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeUntilChristmas());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeUntilChristmas());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <S.SplashPageContainer className="layout-padding">
      <S.MainContainer>
        <S.HeartWrapper>
          <img width={'28%'} src={SmallHeart} alt="small-heart" />
          <img width={'39%'} src={BigHeart} alt="small-heart" />
          <img width={'28%'} src={SmallHeart} alt="small-heart" />
        </S.HeartWrapper>
        <S.BodyWrapper>
          <Text
            typograph={'bodyLargeRegular'}
            color={'Blue2'}
            style={{ lineHeight: '2.4rem', fontWeight: '400' }}
          >
            설마, 올해도 솔크...? 서두르세요 !
          </Text>
          <Text
            typograph={'titleMedium'}
            color={'Blue2'}
            style={{ lineHeight: '2.4rem', fontWeight: '600' }}
          >
            크리스마스까지 남은 기간
          </Text>
          <S.TimeWrapper>
            <S.TimeTextWrapper>
              <S.TimeText>{String(timeLeft.days).padStart(2, '0')}</S.TimeText>
              <Text typograph={'bodyMediumSemiBold'} color={'Blue2'}>
                일
              </Text>
            </S.TimeTextWrapper>
            <S.TimeTextWrapper>
              <S.TimeText>:</S.TimeText>
            </S.TimeTextWrapper>
            <S.TimeTextWrapper>
              <S.TimeText>{String(timeLeft.hours).padStart(2, '0')}</S.TimeText>
              <Text typograph={'bodyMediumSemiBold'} color={'Blue2'}>
                시
              </Text>
            </S.TimeTextWrapper>
            <S.TimeTextWrapper>
              <S.TimeText>:</S.TimeText>
            </S.TimeTextWrapper>
            <S.TimeTextWrapper>
              <S.TimeText>
                {String(timeLeft.minutes).padStart(2, '0')}
              </S.TimeText>
              <Text typograph={'bodyMediumSemiBold'} color={'Blue2'}>
                분
              </Text>
            </S.TimeTextWrapper>
          </S.TimeWrapper>
        </S.BodyWrapper>
      </S.MainContainer>

      <S.ButtonWrapper>
        <Text
          typograph={'bodyMediumMedium'}
          color={'Blue2'}
          style={{ fontWeight: 500, textAlign: 'center' }}
        >
          시대팅 전시즌 평균 신청수 984건!
        </Text>
        <Text
          typograph={'bodyMediumMedium'}
          color={'Blue2'}
          style={{ fontWeight: 500, textAlign: 'center' }}
        >
          성비 남2 : 여1, 여 매칭률 99%
        </Text>
        <S.Button
          onClick={() => {
            navigate('/start');
          }}
        >
          눈 맞을 짝 찾으러 가기 <img src={snowmanIcon} width={16} />
        </S.Button>
      </S.ButtonWrapper>
    </S.SplashPageContainer>
  );
};

export default SplashPage;
