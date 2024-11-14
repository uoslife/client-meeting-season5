import { S } from './style';
import TreeIcon from '../../lib/assets/images/splash_tree_icon.png';
import Text from '../../components/common/Text';
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { calculateTimeUntilChristmas } from '../../utils/time';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeUntilChristmas());
  const [layout, setLayout] = useState({ gap: 0, paddingTop: 0 });
  const navigate = useNavigate();
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const updateLayout = () => {
      const screenHeight = window.innerHeight;
      setLayout({
        gap: screenHeight * 0.15,
        paddingTop: screenHeight * 0.12,
      });
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeUntilChristmas());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.SplashPageContainer className="layout-padding">
      <S.SplashContentWrapper
        ref={contentRef}
        style={{ gap: layout.gap, paddingTop: layout.paddingTop }}
      >
        <S.TitleWrapper>
          <img src={TreeIcon} alt="나무 아이콘" />
          <S.FlexBox>
            <Text typograph={'headlineMedium'} color={'Yellow'}>
              크리스마까지 남은 기간
            </Text>
            <Text
              typograph={'headlineMedium'}
              color={'Yellow'}
              style={{ fontWeight: 700 }}
            >
              {`단 ${timeLeft.days.toString()}일!`}
            </Text>
          </S.FlexBox>
        </S.TitleWrapper>
        <S.TimeText>
          {String(timeLeft.hours + timeLeft.days * 24).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </S.TimeText>
        <S.FlexBox>
          <Text typograph={'titleMedium'} color={'Yellow'}>
            시즌 평균 신청 수 0,000건
          </Text>{' '}
          <Text typograph={'titleMedium'} color={'Yellow'}>
            성비 남0 : 여0, 매칭률 00%
          </Text>
        </S.FlexBox>
      </S.SplashContentWrapper>
      <div
        className="layout-padding"
        style={{ width: '100%', bottom: 36, position: 'absolute' }}
      >
        <Button
          buttonType={'yellow'}
          onClick={() => {
            navigate('/start');
          }}
        >
          눈 맞을 짝을 찾아 떠나볼까요?
        </Button>
      </div>
    </S.SplashPageContainer>
  );
};

export default SplashPage;
