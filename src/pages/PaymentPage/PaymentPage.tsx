import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import Text from '../../components/common/Text';
import { S } from './style';

const PaymentPage = () => {
  const paymentHandler = () => {};

  return (
    <S.Container>
      <Header title="1대1 신청하기" />
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
              상품명
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
        <Button buttonColor="primary" type="button" onClick={paymentHandler}>
          결제하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
export default PaymentPage;
