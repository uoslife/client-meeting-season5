import Text from '../../components/common/Text';
import { S } from './style';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/feature/Footer';
import MainIMG from '../../lib/assets/images/start-main-img.png';
import { COLORS } from '../../lib/constants';
import useToast from '../../hooks/useToast';
import { useState } from 'react';

const StarterPage = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string>('');
  const { toast, render } = useToast();
  const CopybuttonHandler = () => {
    navigator.clipboard
      .writeText(import.meta.env.VITE_SHARE_LINK)
      .then(() => {
        setToastMessage('텍스트가 클립보드에 복사되었습니다.');
      })
      .catch(() => {
        setToastMessage('클립보드 복사에 실패했습니다');
      });
    toast(1500);
  };
  return (
    <>
      <S.StarterPageContainer>
        <S.UpperWrapper className="layout-padding">
          <S.Wrapper>
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
                      2024.12.02(월)
                    </Text>
                    <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                      -
                    </Text>
                    <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                      2024.12.05(목) 자정
                    </Text>
                  </S.DateBox>
                </S.DateWrapper>
                <S.DateWrapper>
                  <Text typograph={'bodyMediumRegular'} color={'Blue90'}>
                    발표기간
                  </Text>
                  <S.DateBox>
                    <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
                      2024.12.07(토)
                    </Text>
                  </S.DateBox>
                </S.DateWrapper>
              </S.SubTitleWrapper>
            </S.HeaderWrapper>
            <div
              style={{
                display: 'table-cell',
                verticalAlign: 'center',
              }}
            >
              <img width={'100%'} src={MainIMG} alt="눈사람 아이콘" />
              <S.ButtonWrapper>
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
            </div>
          </S.Wrapper>
        </S.UpperWrapper>
      </S.StarterPageContainer>
      <Footer />
      {render(toastMessage)}
    </>
  );
};
export default StarterPage;
