import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import { S } from './style';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import PersonalResult from '../../lib/assets/images/personal-result.png';
import GroupResult from '../../lib/assets/images/group-result.png';
import { useEffect, useState } from 'react';
import { useMatchResult } from '../../hooks/api/useMatch';
import useModal from '../../hooks/useModal';
import MatchFailedPage from '../../components/feature/MatchFailedFailedPage';
import { useQueryClient } from '@tanstack/react-query';

const LetterPage = () => {
  const [searchParams] = useSearchParams();
  const [errorText, setErrorText] = useState('');
  const [isMatched, setIsMatched] = useState<boolean>(true);

  const navigate = useNavigate();
  const teamType = searchParams.get('type') as 'personal' | 'group';
  const queryClient = useQueryClient();
  const { data, isError, error, isSuccess } = useMatchResult({
    teamType: teamType === 'personal' ? 'SINGLE' : 'TRIPLE',
  });

  const modal = useModal({
    title: '',
    description: errorText,
    mainButtonCallback: () => navigate('/auth/final'),
    isSideButton: false,
  });

  useEffect(() => {
    if (isError) {
      setErrorText('네트워크 상태가 불안정합니다. 새로고침 후 이용해주세요.');
      modal.open();
    }
  }, [isError, error]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['matchResult'] });
    if (isSuccess) {
      if (!data.isMatched) setIsMatched(false);
    }
  }, [isSuccess]);

  return isMatched ? (
    <S.Background>
      <Header
        title={teamType === 'personal' ? '1대1 매칭결과' : '3대3 매칭결과'}
        isGoBackButton={true}
        leftButtonCallback={() => navigate('/auth/final')}
        style={{ color: 'White' }}
      />
      <S.Container className="layout-padding">
        <S.MainContainer className="layout-padding">
          <S.TextWrapper>
            <Text typograph={'headlineLarge'} color="White">
              띠링, 크리스마스 편지가
            </Text>
            <Text typograph={'headlineLarge'} color="White">
              도착했어요!
            </Text>
          </S.TextWrapper>

          {teamType === 'group' && <img src={GroupResult} width={'100%'} />}
          {teamType === 'personal' && (
            <img src={PersonalResult} width={'100%'} />
          )}
        </S.MainContainer>
        <S.ButtonWrapper>
          <Text typograph={'titleMedium'} color={'White'}>
            두근두근... 과연 누가 보냈을까요?
          </Text>
          <Button
            buttonColor={'white'}
            onClick={() => navigate(`/auth/final/result/${teamType}`)}
          >
            {teamType === 'group' ? '초대장 열어보기' : '편지 열어보기'}
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </S.Background>
  ) : (
    <MatchFailedPage teamType={teamType} />
  );
};

export default LetterPage;
