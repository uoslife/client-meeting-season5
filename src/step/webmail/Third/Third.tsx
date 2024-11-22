import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';

import { S } from './style';
import Text from '../../../components/common/Text';
import WebmailImg from '../../../lib/assets/images/webmail-result-img.png';

const Third = (): ReactNode => {
  const navigate = useNavigate();
  return (
    <S.Container className="layout-padding">
      <S.MainContainer>
        <S.Wrapper>
          <S.IconWrapper>
            <S.TextWrapper>
              <Text typograph={'headlineMedium'} color="Blue90">
                인증 완료! 환영합니다~
              </Text>
              <S.DescriptionWrapper>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  이제 내 정보를 입력하고 프로필을
                </Text>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  만들 수 있어요.
                </Text>
              </S.DescriptionWrapper>
            </S.TextWrapper>
            <img src={WebmailImg} width="52%" />
          </S.IconWrapper>
        </S.Wrapper>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button
          buttonColor={'primary'}
          onClick={() => navigate('/auth/profile')}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Third;
