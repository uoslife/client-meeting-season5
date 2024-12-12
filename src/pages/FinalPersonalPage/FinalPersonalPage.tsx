import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
import PersonalSummaryCard from '../../components/feature/PersonalSummaryCard';
import close from '../../lib/assets/icon/close-white.svg';
import {
  AppearanceType,
  DepartmentType,
  EyelidType,
  SmokingType,
} from '../../lib/types/personalMeeting.type';
import { useMatchResult } from '../../hooks/api/useMatch';
import useModal from '../../hooks/useModal';
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
  studentType?: string;
};

const SummaryPage = () => {
  const navigate = useNavigate();
  const {
    data: personalData,
    isError: isPersonalError,
    error: personalError,
    isPending: isPersonalPending,
    isSuccess: isPersonalSuccess,
  } = useMatchResult({ teamType: 'SINGLE' });

  const [errorText, setErrorText] = useState('');
  const [personalUserInfo, setPersonalUserInfo] =
    useState<personalUserInfoType>();

  const toast = useToast();
  const modal = useModal({
    title: '',
    description: errorText,
    mainButtonCallback: () => navigate('/auth/final'),
    isSideButton: false,
  });

  useEffect(() => {
    if (isPersonalError) {
      setErrorText('네트워크 상태가 불안정합니다. 새로고침 후 이용해주세요.');
      modal.open();
    }
  }, [isPersonalError, personalError]);

  useEffect(() => {
    if (isPersonalSuccess) {
      const personalUserInfo: personalUserInfoType = {
        name: personalData?.partnerTeam.userProfiles[0].name,
        gender: personalData?.partnerTeam.gender,
        department: personalData?.partnerTeam.userProfiles[0].department,
        studentNumber: personalData?.partnerTeam.userProfiles[0].studentNumber,
        studentType: personalData?.partnerTeam.userProfiles[0].studentType,
        appearanceType:
          personalData?.partnerTeam.userProfiles[0].appearanceType,
        mbti: personalData?.partnerTeam.userProfiles[0].mbti,
        eyelid: personalData?.partnerTeam.userProfiles[0].eyelidType,
        course: personalData?.partnerTeam.course,
        interest: personalData?.partnerTeam.userProfiles[0].interest,
        kakaoTalkId: personalData?.partnerTeam.userProfiles[0].kakaoTalkId,
        height: personalData?.partnerTeam.userProfiles[0].height,
        age: personalData?.partnerTeam.userProfiles[0].age,
      };
      setPersonalUserInfo(personalUserInfo);
    }
  }, [isPersonalSuccess]);

  return (
    <S.Background>
      {modal.render()}
      <S.Container className="layout-padding">
        <S.MainContainer>
          {!isPersonalPending && !isPersonalError && personalUserInfo && (
            <S.CardContainer>
              <PersonalSummaryCard toast={toast} userInfo={personalUserInfo} />
            </S.CardContainer>
          )}
          <S.ContentWrapper>
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
