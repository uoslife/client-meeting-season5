import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import { S } from './style';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import PersonalResult from '../../lib/assets/images/personal-result.png';
import GroupResult from '../../lib/assets/images/group-result.png';

const LetterPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const teamType = searchParams.get('type') as 'personal' | 'group';
  return (
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
  );
};

export default LetterPage;