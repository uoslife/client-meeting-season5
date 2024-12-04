import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import Button from '../../components/common/Button';
import santaAndRudolf from '../../lib/assets/images/santa-and-rudolf.png';
import S from './style';

const PaymentSuccessPage = (): ReactNode => {
  const navigate = useNavigate();
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
          <S.GradientText>신청이 완료되었어요!</S.GradientText>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
          >
            {/* TODO: 신청 취소 기한 알려주소 */}
            {`나의 짝은 12월 7일에 확인할 수 있어요.\n 이제 기다림의 시간...`}
          </Text>
        </div>
        <img src={santaAndRudolf} alt="tree" width={264} height={162} />
        <Text color={'Blue30'} typograph={'labelMediumMedium'}>
          {/* TODO: 신청 취소 기한 알려주소 */}
          신청 취소 기한 12월 5일 오후 11시 59분까지
        </Text>
      </div>

      <div
        className="layout-padding"
        style={{ width: '100%', bottom: 36, position: 'absolute' }}
      >
        <Button buttonColor={'primary'} onClick={() => navigate('/auth/main')}>
          완료
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default PaymentSuccessPage;
