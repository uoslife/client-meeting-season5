import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
// import GroupSummaryCard from '../../components/feature/GroupSummaryCard';
import PersonalSummaryCard from '../../components/feature/PersonalSummaryCard';
// import { useGetMeetingPersonalInfo } from '../../hooks/api/useMeetingPersonalInfo';
import close from '../../lib/assets/icon/close-white.svg';
import {
  AppearanceType,
  DepartmentType,
  EyelidType,
  SmokingType,
} from '../../lib/types/personalMeeting.type';
// import useModal from '../../hooks/useModal';
// import { errorHandler } from '../../utils/api';
// import { useEffect, useState } from 'react';

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
  studentType?: string;
};

const SummaryPage = () => {
  const navigate = useNavigate();
  // const [errorText, setErrorText] = useState('');

  // const {
  //   data: personalData,
  //   isError: isPersonalError,
  //   error: personalError,
  // } = useGetMeetingPersonalInfo();

  const toast = useToast();
  // const modal = useModal({
  //   title: '',
  //   description: errorText,
  //   mainButtonCallback: () => navigate('/auth/main'),
  //   isSideButton: false,
  // });

  // useEffect(() => {
  //   if (isPersonalError) {
  //     setErrorText(errorHandler(personalError));
  //     modal.open();
  //   }
  // }, [isPersonalError, personalError]);

  // const personalUserInfo: personalUserInfoType = {
  //   name: personalData?.meetingTeamUserProfiles[0].name,
  //   gender: personalData?.gender,
  //   department: personalData?.meetingTeamUserProfiles[0].department,
  //   studentNumber: personalData?.meetingTeamUserProfiles[0].studentNumber,
  //   studentType: personalData?.meetingTeamUserProfiles[0].studentType,
  //   appearanceType: personalData?.meetingTeamUserProfiles[0].appearanceType,
  //   mbti: personalData?.meetingTeamUserProfiles[0].mbti,
  //   eyelid: personalData?.meetingTeamUserProfiles[0].eyelidType,
  //   course: personalData?.course,
  //   interest: personalData?.meetingTeamUserProfiles[0].interest,
  //   kakaoTalkId: personalData?.meetingTeamUserProfiles[0].kakaoTalkId,
  //   height: personalData?.meetingTeamUserProfiles[0].height,
  //   age: personalData?.meetingTeamUserProfiles[0].age,
  // };

  const personalUserInfo: personalUserInfoType = {
    name: '조종빈',
    gender: 'MALE',
    department: '건축학부',
    studentNumber: 20,
    studentType: 'UNDERGRADUATE',
    appearanceType: 'NORMAL',
    mbti: 'ENTJ',
    eyelid: 'DOUBLE',
    course: '이런이런 코스를',
    interest: ['일번', '이번'],
    kakaoTalkId: 'jongbin26',
    height: 170,
    age: 22,
  };

  return (
    <S.Background>
      {/* {modal.render()} */}
      <S.Container className="layout-padding">
        <S.MainContainer>
          {/* {!isPersonalError && (
            <S.CardContainer>
              <PersonalSummaryCard toast={toast} userInfo={personalUserInfo} />
            </S.CardContainer>
          )} */}
          <S.ContentWrapper>
            <S.CardContainer>
              <PersonalSummaryCard toast={toast} userInfo={personalUserInfo} />
            </S.CardContainer>
            <S.TextWrapper>
              <Text color={'Red30'} typograph={'labelMediumMedium'}>
                상대방의 카톡ID을 찾을 수 없는 경우,
              </Text>
              <Text color={'Red30'} typograph={'labelMediumMedium'}>
                카카오채널로 문의해 주세요.
              </Text>
            </S.TextWrapper>
            <S.CloseWrapper onClick={() => navigate('/auth/final')}>
              <img src={close} width={20} height={20} />
            </S.CloseWrapper>
          </S.ContentWrapper>

          <S.ToastWrapper>
            {toast.render('카카오톡 ID가 복사되었습니다.')}
          </S.ToastWrapper>
        </S.MainContainer>
      </S.Container>
      <S.ButtonWrapper></S.ButtonWrapper>
    </S.Background>
  );
};
export default SummaryPage;
