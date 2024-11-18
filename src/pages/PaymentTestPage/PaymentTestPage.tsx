import { useRef } from 'react';
import BasicInput from '../../components/common/BasicInput';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import Text from '../../components/common/Text';
import usePayment from '../../hooks/usePayment';
import S from './style';

const PaymentTestPage = () => {
  const { requestPayment, verifyPayment } = usePayment();
  const accessTokenRef = useRef<HTMLInputElement>(null);
  const teamTypeRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container>
      <Header title="1대1 신청하기" />
      <S.MainContainer className="layout-padding">
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ marginBottom: '8px', fontWeight: 700 }}
        >
          테스트 페이지입니다.
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
              1대1 미팅
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
        <S.InputWrapper>
          <Text typograph={'bodyMediumMedium'} color={'Blue90'}>
            accessToken 입력
          </Text>
          <BasicInput
            style={{ flex: '1 0', marginLeft: '20px' }}
            ref={accessTokenRef}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <Text typograph={'bodyMediumMedium'} color={'Blue90'}>
            TeamType 입력 - SINGLE, TRIPLE
          </Text>
          <BasicInput
            style={{ flex: '1 0', marginLeft: '20px' }}
            ref={teamTypeRef}
          />
        </S.InputWrapper>
      </S.MainContainer>
      <S.ButtonWrapper className="layout-padding">
        <Button
          buttonColor="primary"
          type="button"
          onClick={async () => {
            //결제 전 결제 여부 확인
            await verifyPayment({
              teamType: teamTypeRef.current!.value as 'SINGLE' | 'TRIPLE',
              accessToken: accessTokenRef.current!.value,
            });
            //분기
            //결제 정보 없는 경우 : 서버에서 에러 throw
            //결제 pending 상태인 경우 PENDING
            //결제 success 상태인 경우 SUCCESS
            //만약 결제중이라면 IMP에 결제 안보냄

            //결제
            requestPayment({
              teamType: teamTypeRef.current!.value as 'SINGLE' | 'TRIPLE',
              accessToken: accessTokenRef.current!.value,
            });
          }}
        >
          결제하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
export default PaymentTestPage;
