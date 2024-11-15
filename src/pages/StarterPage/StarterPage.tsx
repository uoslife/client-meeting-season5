import Text from '../../components/common/Text';
import { S } from './style';
import MainTextSVG from '../../lib/assets/images/starter_main_text.svg';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/feature/Footer';
import useToast from '../../hooks/useToast';
import { useState } from 'react';

const StarterPage = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string>('');
  const { toast, render } = useToast();
  const CopybuttonHandler = () => {
    navigator.clipboard
      .writeText('http://localhost:5173/')
      .then(() => {
        console.log('성공');
        setToastMessage('텍스트가 클립보드에 복사되었습니다.');
      })
      .catch(() => {
        console.log('실패');
        setToastMessage('클립보드 복사에 실패했습니다');
      });
    toast(1500);
  };
  return (
    <>
      <S.StarterPageContainer>
        <S.HeaderWrapper className="layout-padding">
          <Text
            typograph={'titleLarge'}
            color={'Blue90'}
            style={{ fontWeight: 600, marginBottom: '12px' }}
          >
            시대팅 시즌 5
          </Text>
          <img src={MainTextSVG} style={{ marginBottom: '28px' }} />
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
        <Footer />
      </S.StarterPageContainer>
      {render(toastMessage)}
    </>
  );
};
export default StarterPage;
