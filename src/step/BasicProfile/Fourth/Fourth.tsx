import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import Button from '../../../components/common/Button';
import { S } from './style';
import BasicImg from '../../../lib/assets/images/basic-result-img.png';

const Fourth = (): ReactNode => {
  const navigate = useNavigate();
  return (
    <S.Container className="layout-padding">
      <S.MainContainer>
        <S.Wrapper>
          <S.IconWrapper>
            <S.TextWrapper>
              <Text typograph={'headlineMedium'} color="Blue90">
                내 프로필 완성!
              </Text>
              <S.DescriptionWrapper>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  미팅 신청에 필요한 프로필을 완성했어요.
                </Text>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  이제 원하는 짝을 찾으러 가볼까요 ?
                </Text>
              </S.DescriptionWrapper>
            </S.TextWrapper>
            <img src={BasicImg} width="180" />
          </S.IconWrapper>
        </S.Wrapper>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button
          buttonColor={'primary'}
          onClick={() => navigate('/auth/profile')}
        >
          눈 맞을 짝을 찾아 떠나볼까요?
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Fourth;
