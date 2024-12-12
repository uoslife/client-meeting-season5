import { ReactNode } from 'react';
import Text from '../../common/Text';
import { S } from './style';

import matchFailed from '../../../lib/assets/images/match-failed.png';
import Header from '../../common/Header';
import { useNavigate } from 'react-router-dom';

const MatchFailedPage = ({
  teamType,
}: {
  teamType: 'personal' | 'group';
}): ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title={teamType === 'personal' ? '1대1 매칭결과' : '3대3 매칭결과'}
        leftButtonCallback={() => navigate('/auth/final')}
      />
      <S.Container className="layout-padding">
        <S.MainContainer>
          <S.Wrapper>
            <S.IconWrapper>
              <S.TextWrapper>
                <S.CustomText>아쉽지만 조건에 맞는 짝을</S.CustomText>
                <S.CustomText>찾지 못했어요.</S.CustomText>
                <S.DescriptionWrapper>
                  <Text typograph={'bodyMediumMedium'} color="Blue70">
                    하지만 다음 시즌에서는 분명
                  </Text>
                  <Text typograph={'bodyMediumMedium'} color="Blue70">
                    좋은 인연을 만날 수 있을 거에요 !
                  </Text>
                </S.DescriptionWrapper>
              </S.TextWrapper>
              <img src={matchFailed} width="288" />
            </S.IconWrapper>
          </S.Wrapper>
        </S.MainContainer>
      </S.Container>
    </>
  );
};

export default MatchFailedPage;
