import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
// import GroupSummaryCard from '../../components/feature/GroupSummaryCard';
import PersonalSummaryCard from '../../components/feature/PersonalSummaryCard';
import { useGetMeetingPersonalInfo } from '../../hooks/api/useMeetingPersonalInfo';
import {
  AppearanceType,
  DepartmentType,
  EyelidType,
  SmokingType,
} from '../../lib/types/personalMeeting.type';
import useModal from '../../hooks/useModal';
import { errorHandler } from '../../utils/api';
import { useEffect, useState } from 'react';

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

export type groupUserInfoType = {
  name?: string;
  department?: DepartmentType | null;
  studentNumber?: number | null;
  age?: number;
  interest?: string[];
  kakaoTalkId?: string;
};

const SummaryPage = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');

  const {
    data: personalData,
    isError: isPersonalError,
    error: personalError,
  } = useGetMeetingPersonalInfo();

  const toast = useToast();
  const modal = useModal({
    title: '',
    description: errorText,
    mainButtonCallback: () => navigate('/auth/main'),
    isSideButton: false,
  });

  useEffect(() => {
    if (isPersonalError) {
      setErrorText(errorHandler(personalError));
      modal.open();
    }
  }, [isPersonalError, personalError]);

  const personalUserInfo: personalUserInfoType = {
    name: personalData?.meetingTeamUserProfiles[0].name,
    gender: personalData?.gender,
    department: personalData?.meetingTeamUserProfiles[0].department,
    studentNumber: personalData?.meetingTeamUserProfiles[0].studentNumber,
    studentType: personalData?.meetingTeamUserProfiles[0].studentType,
    appearanceType: personalData?.meetingTeamUserProfiles[0].appearanceType,
    mbti: personalData?.meetingTeamUserProfiles[0].mbti,
    eyelid: personalData?.meetingTeamUserProfiles[0].eyelidType,
    course: personalData?.course,
    interest: personalData?.meetingTeamUserProfiles[0].interest,
    kakaoTalkId: personalData?.meetingTeamUserProfiles[0].kakaoTalkId,
    height: personalData?.meetingTeamUserProfiles[0].height,
    age: personalData?.meetingTeamUserProfiles[0].age,
  };

  return (
    <S.Background>
      {modal.render()}
      <Header
        title={'1대1 신청하기'}
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
          {!isPersonalError && (
            <S.CardContainer>
              <PersonalSummaryCard toast={toast} userInfo={personalUserInfo} />
            </S.CardContainer>
          )}
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
              navigate('/auth/private-policy?type=personal');
            }}
          >
            다음
          </Button>
        </div>
      </S.ButtonWrapper>
    </S.Background>
  );
};
export default SummaryPage;
