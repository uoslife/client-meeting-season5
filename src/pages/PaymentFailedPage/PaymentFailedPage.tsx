import { ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Text from '../../components/common/Text';
import Button from '../../components/common/Button';
import snowmanAndBird from '../../lib/assets/images/snowman-and-bird.png';
import S from './style';

const PaymentFailed = (): ReactNode => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const teamType = searchParams.get('type') as 'personal' | 'group';
  return (
    <S.Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          alignItems: 'center',
          transform: 'translateY(-25%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Text color={'Blue90'} typograph={'headlineMedium'}>
            앗, 결제에 실패했어요..
          </Text>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
          >
            {`문제가 계속해서 해결되지 않을 경우,\n카카오채널로 문의해 주세요.`}
          </Text>
        </div>
        <img src={snowmanAndBird} alt="tree" width={240} height={234} />
      </div>

      <div
        className="layout-padding"
        style={{
          width: '100%',
          bottom: 36,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Button
          buttonColor={'primary'}
          onClick={() => navigate(`/auth/payment?type=${teamType}`)}
        >
          다시결제하기
        </Button>
        <Button
          buttonColor={'secondary'}
          onClick={() => window.open('http://pf.kakao.com/_gMEHK')}
        >
          카카오채널로 문의하기
        </Button>
        <Button
          buttonColor={'secondary'}
          onClick={() => navigate('/auth/main')}
        >
          홈으로 돌아가기
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default PaymentFailed;
