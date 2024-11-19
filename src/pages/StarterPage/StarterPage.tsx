import Text from '../../components/common/Text';
import { S } from './style';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/feature/Footer';
import useToast from '../../hooks/useToast';
import { useState } from 'react';
import MainIMG from '../../lib/assets/images/start-main-img.svg';
import { COLORS } from '../../lib/constants';

const StarterPage = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string>('');
  const { toast, render } = useToast();
  // const CopybuttonHandler = () => {
  //   navigator.clipboard
  //     .writeText(import.meta.env.VITE_SHARE_LINK)
  //     .then(() => {
  //       console.log('성공');
  //       setToastMessage('텍스트가 클립보드에 복사되었습니다.');
  //     })
  //     .catch(() => {
  //       console.log('실패');
  //       setToastMessage('클립보드 복사에 실패했습니다');
  //     });
  //   toast(1500);
  // };
  const CopybuttonHandler = () => {
    navigate('/payment-test');
  };
  return (
    <>
      <S.StarterPageContainer>
        <S.UpperWrapper>
          <S.HeaderWrapper className="layout-padding">
            <Text
              typograph={'titleLarge'}
              color={'Blue90'}
              style={{ fontWeight: 600, marginBottom: '12px' }}
            >
              시대팅 시즌 5
            </Text>
            <S.CustomTextWrapper>
              <S.CustomText>Let it Snow</S.CustomText>
              <S.CustomText>
                Let it <span style={{ color: COLORS.Red60 }}>Some</span>
              </S.CustomText>
            </S.CustomTextWrapper>
            <S.SubTitleWrapper>
              <S.DateWrapper>
                <Text typograph={'bodyMediumRegular'} color={'Blue90'}>
                  신청기간
                </Text>
                <S.DateBox>
                  <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                    2024.12.04
                  </Text>
                  <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                    -
                  </Text>
                  <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                    2025.1.1
                  </Text>
                </S.DateBox>
              </S.DateWrapper>
              <S.DateWrapper>
                <Text typograph={'bodyMediumRegular'} color={'Blue90'}>
                  신청기간
                </Text>
                <S.DateBox>
                  <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                    2024.12.04
                  </Text>
                  <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                    -
                  </Text>
                  <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                    2025.1.1
                  </Text>
                </S.DateBox>
              </S.DateWrapper>
            </S.SubTitleWrapper>
          </S.HeaderWrapper>
          <img src={MainIMG} alt="눈사람이 스키를 타는 아이콘" />
          <S.ButtonWrapper className="layout-padding">
            <Button
              buttonColor={'primary'}
              onClick={() => {
                navigate('/policy');
              }}
            >
              시대팅 시작하기
            </Button>
            <Button buttonColor={'blue'} onClick={CopybuttonHandler}>
              친구에게 공유하기
            </Button>
          </S.ButtonWrapper>
        </S.UpperWrapper>
        <Footer />
      </S.StarterPageContainer>
      {render(toastMessage)}
    </>
  );
};
export default StarterPage;
