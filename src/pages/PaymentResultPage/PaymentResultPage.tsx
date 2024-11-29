import { ReactNode, useEffect } from 'react';
import Text from '../../components/common/Text';
import S from './style';
import { usePaymentResult } from '../../hooks/api/usePayment';
import { useNavigate, useSearchParams } from 'react-router-dom';
import sataFace from '../../lib/assets/images/santa-face.png';

const PAYMENT_ENUM: { [key: string]: 'SINGLE' | 'TRIPLE' } = {
  personal: 'SINGLE',
  group: 'TRIPLE',
};

const PaymentResultPage = (): ReactNode => {
  const [searchParams] = useSearchParams();
  const teamType = searchParams.get('type') as 'personal' | 'group';
  const navigate = useNavigate();

  const { data, isError, error } = usePaymentResult({
    teamType: PAYMENT_ENUM[teamType],
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (data)
        navigate(`/auth/payment/success?type=${teamType}`, { replace: true });
      if (isError)
        navigate(`/auth/payment/failed?type=${teamType}`, { replace: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, [data, isError, error]);

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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.GradientText>슝슝~ 산타가 편지 배달 중!</S.GradientText>
            <img src={sataFace} width={20} height={20} />
          </div>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
          >
            {`화면을 종료하지 말고\n결제가 완료될 때까지 기다려주세요.`}
          </Text>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default PaymentResultPage;
