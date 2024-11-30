import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import summaryTree from '../../lib/assets/images/summary-tree.png';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
import GroupSummaryCard from '../../components/feature/GroupSummaryCard';
import PersonalSummaryCard from '../../components/feature/PersonalSummaryCard';
import { useGetMeetingPersonalInfo } from '../../hooks/api/useMeetingPersonalInfo';
import {
  AppearanceType,
  DepartmentType,
  EyelidType,
  SmokingType,
} from '../../lib/types/personalMeeting.type';

const HEADER_TITLE = {
  personal: '1대1 신청하기',
  group: '3대3 신청하기',
};

const userInfo = {
  height: '163',
  age: '27',
  name: '우채윤',
  gender: '여성' as '여성' | '남성',
  department: '디자인학과',
  studentId: '17',
  interest: ['운동', '게임', '카페', '맛집탐방'],
  kakaoTalkId: 'woochy0827',
};

export type personalUserInfoType = {
  course?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  name?: string;
  studentType?: 'UNDERGRADUATE' | 'GRADUATE' | 'POSTGRADUATE';
  department?: DepartmentType | null;
  studentNumber?: number | null;
  age?: number;
  height?: number;
  mbti?: string;
  appearanceType?: AppearanceType;
  eyelid?: EyelidType;
  smoking?: SmokingType;
  interest?: string[];
  kakaoTalkId?: string;
};

const SummaryPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const headerTitleType = searchParams.get('type') as 'personal' | 'group';
  const toast = useToast();
  const { data } = useGetMeetingPersonalInfo();

  // useEffect(()=>{
  //   if(!isSuccess) return;

  // },[isSuccess])

  const personalUserInfo: personalUserInfoType = {
    name: data?.meetingTeamUserProfiles[0].name,
    gender: data?.gender,
    department: data?.meetingTeamUserProfiles[0].department,
    studentNumber: data?.meetingTeamUserProfiles[0].studentNumber,
    appearanceType: data?.meetingTeamUserProfiles[0].appearanceType,
    mbti: data?.meetingTeamUserProfiles[0].mbti,
    eyelid: data?.meetingTeamUserProfiles[0].eyelidType,
    course: data?.course,
    interest: data?.meetingTeamUserProfiles[0].interest,
    kakaoTalkId: data?.meetingTeamUserProfiles[0].kakaoTalkId,
    height: data?.meetingTeamUserProfiles[0].height,
    age: data?.meetingTeamUserProfiles[0].age,
  };

  return (
    <S.Background>
      <Header
        title={HEADER_TITLE[headerTitleType]}
        isGoBackButton={false}
        rightButtonType="logoutWhite"
        rightButtonCallback={() => {
          navigate('/auth/main');
        }}
        style={{ color: 'White' }}
      />
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
            {headerTitleType === 'group' && (
              <Text color="Blue2" typograph="titleMedium">
                {`From. ${'팀이름'}`}
              </Text>
            )}
            {headerTitleType === 'personal' ? (
              <PersonalSummaryCard toast={toast} userInfo={personalUserInfo} />
            ) : (
              <>
                <GroupSummaryCard toast={toast} userInfo={userInfo} />
                <GroupSummaryCard toast={toast} userInfo={userInfo} />
                <GroupSummaryCard toast={toast} userInfo={userInfo} />
              </>
            )}
          </S.CardContainer>
          <S.ToastWrapper>
            {toast.render('카카오톡 ID가 복사되었습니다.')}
          </S.ToastWrapper>
        </S.MainContainer>
      </S.Container>
      <S.ButtonWrapper>
        <div
          className="layout-padding"
          style={{
            position: 'absolute',
            width: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <Button
            buttonColor="white"
            type="submit"
            onClick={() => {
              if (headerTitleType === 'personal')
                navigate('/auth/private-policy?type=personal');
              else navigate('/auth/private-policy?type=group');
            }}
          >
            다음
          </Button>
        </div>
        {/* <img
          src={summaryTree}
          style={{
            height: 120,
            width: '100vw',
            objectFit: 'contain',
          }}
        /> */}
      </S.ButtonWrapper>
    </S.Background>
  );
};
export default SummaryPage;
