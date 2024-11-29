import { useAtomValue } from 'jotai';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import Text from '../../components/common/Text';
import usePayment from '../../hooks/usePayment';
import { S } from './style';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { useSearchParams } from 'react-router-dom';

const PaymentPage = () => {
  const { requestPayment, verifyPayment } = usePayment();
  const accessToken = useAtomValue(accessTokenAtom);
  const [searchParams] = useSearchParams();
  const headerTitleType = searchParams.get('type') as 'personal' | 'group';

  const headerTitle = () => {
    if (headerTitleType === 'personal') return '1대1';
    return '3대3';
  };

  return (
    <S.Container>
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
          onClick={async () => {
            //결제 전 결제 여부 확인
            await verifyPayment({
              teamType: 'SINGLE',
              accessToken: accessToken,
            })
              .then((res) => {
                //결제 pending 상태인 경우 PENDING
                //결제 success 상태인 경우 SUCCESS
                //만약 결제중이라면 IMP에 결제 안보냄
                //결제 대기중이므로 결제 대기 페이지 혹은 Suspense 처리 해줘야함
                console.log('여기서 PENDING, SUCCESS 상태면 리다이렉트');
                console.log(res);
              })
              .catch((err) => {
                //에러 났으면 밑에 requestPayment 함수 실행
                //결제 정보 없는 경우 : 서버에서 에러 throw
                console.log(err);
              });

            //결제
            requestPayment({
              teamType: 'SINGLE',
              accessToken: accessToken,
            });
          }}
        >
          결제하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
export default PaymentPage;
