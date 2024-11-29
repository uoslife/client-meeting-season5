import { useAtomValue } from 'jotai';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import Text from '../../components/common/Text';
import usePayment from '../../hooks/usePayment';
import { S } from './style';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useToast from '../../hooks/useToast';

const PaymentPage = () => {
  const { requestPayment, verifyPayment } = usePayment();
  const navigate = useNavigate();
  const accessToken = useAtomValue(accessTokenAtom);
  const [searchParams] = useSearchParams();
  const headerTitleType = searchParams.get('type') as 'personal' | 'group';
  const errorToast = useToast();

  const headerTitle = () => {
    if (headerTitleType === 'personal') return '1대1';
    return '3대3';
  };

  const PAYMENT_ENUM: { [key: string]: 'SINGLE' | 'TRIPLE' } = {
    personal: 'SINGLE',
    group: 'TRIPLE',
  };

  const handleRequestPayment = () => {
    requestPayment({
      teamType: PAYMENT_ENUM[headerTitleType],
      accessToken: accessToken,
    }).catch((error) => {
      switch (error.response.data.code) {
        case 'U02':
          errorToast.toast(1000);
          break;
        case 'M06':
          errorToast.toast(1000);
          break;
        case 'U06':
          errorToast.toast(1000);
          break;
        case 'P04':
          navigate(`/auth/payment/result?type=${headerTitleType}`, {
            replace: true,
          });
      }
    });
  };

  const handleVerifyPayment = async () => {
    await verifyPayment({
      teamType: PAYMENT_ENUM[headerTitleType],
      accessToken: accessToken,
    })
      .then((res) => {
        //성공 시 결과 페이지로 리다이렉팅
        navigate(`/auth/payment/result?type=${headerTitleType}`);
        console.log(res);
      })
      .catch((err) => {
        //P01 에러만 결제로 연결
        console.log(err);
        switch (err.response.data.code) {
          case 'U02':
            navigate('/auth/main');
            break;
          case 'M06':
            navigate('/auth/main');
            break;
          case 'P01':
            // 결제
            handleRequestPayment();
            break;
          case 'P04':
            navigate(`/auth/payment/result?type=${headerTitle}`, {
              replace: true,
            });
        }
      });
  };

  return (
    <S.Container>
      {errorToast.render(
        '결제 정보가 존재하지 않습니다. 새로고침 후 이용해주세요.',
      )}
      <Header title={headerTitle() + ' 신청하기'} />
      <S.MainContainer className="layout-padding">
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ marginBottom: '8px', fontWeight: 700 }}
        >
          참가비를 결제해 주세요.
        </Text>
        <Text
          typograph={'bodyMediumMedium'}
          color={'Blue70'}
          style={{ marginBottom: '40px' }}
        >
          매칭 신청을 위한 결제를 진행합니다.
        </Text>
        <S.ProductWrapper>
          <S.ProductItem>
            <Text typograph={'bodyLargeRegular'} color={'Blue90'}>
              상품명
            </Text>
            <Text
              typograph={'titleSmall'}
              color={'Blue90'}
              style={{ fontWeight: 600 }}
            >
              {headerTitle() + ' 미팅'}
            </Text>
          </S.ProductItem>
          <S.ProductItem>
            <Text typograph={'bodyLargeRegular'} color={'Blue90'}>
              상품금액
            </Text>
            <Text
              typograph={'titleSmall'}
              color={'Blue90'}
              style={{ fontWeight: 600 }}
            >
              2,000원
            </Text>
          </S.ProductItem>
        </S.ProductWrapper>
      </S.MainContainer>
      <S.ButtonWrapper className="layout-padding">
        <Button
          buttonColor="primary"
          type="button"
          onClick={handleVerifyPayment}
        >
          결제하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
export default PaymentPage;
