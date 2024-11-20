import { useSearchParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
import GroupSummaryCard from '../../components/feature/GroupSummaryCard';

const HEADER_TITLE = {
  personal: '1대1 신청하기',
  group: '3대3 신청하기',
};

const userInfo = {
  name: '우채윤',
  gender: '여성' as '여성' | '남성',
  department: '디자인학과',
  studentId: '17',
  interest: ['운동', '게임', '카페', '맛집탐방'],
  kakaoTalkId: 'woochy0827',
};

const SummaryPage = () => {
  const [searchParams] = useSearchParams();
  const headerTitleType = searchParams.get('type') as 'personal' | 'group';
  const toast = useToast();

  return (
    <S.Background>
      <Header title={HEADER_TITLE[headerTitleType]} isGoBackButton={true} />
      <S.Container className="layout-padding">
        <S.MainContainer>
          <Text
            color={'Blue2'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%' }}
          >
            카드로 미리 보기
          </Text>
          <S.CardContainer>
            <Text color="Blue2" typograph="titleMedium">
              {`From. ${'팀이름'}`}
            </Text>
            <GroupSummaryCard toast={toast} userInfo={userInfo} />
            <GroupSummaryCard toast={toast} userInfo={userInfo} />
            <GroupSummaryCard toast={toast} userInfo={userInfo} />
          </S.CardContainer>
          <S.ToastWrapper>
            {toast.render('카카오톡 ID가 복사되었습니다.')}
          </S.ToastWrapper>
        </S.MainContainer>
      </S.Container>
      <S.ButtonWrapper className="layout-padding">
        <Button buttonColor="white" type="submit" onClick={() => {}}>
          다음
        </Button>
      </S.ButtonWrapper>
    </S.Background>
  );
};
export default SummaryPage;
