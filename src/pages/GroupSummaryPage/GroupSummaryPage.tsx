import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
import { DepartmentType } from '../../lib/types/personalMeeting.type';
import useModal from '../../hooks/useModal';
import { errorHandler } from '../../utils/api';
import { useEffect, useState } from 'react';
import { useGetFinalMeetingGroupInfo } from '../../hooks/api/useMeetingGroupInfo';
import GroupSummaryCard from '../../components/feature/GroupSummaryCard';

export type groupUserInfoType = {
  name: string;
  department?: DepartmentType | null;
  studentNumber?: number | null;
  age?: number;
  interest?: string[];
  kakaoTalkId?: string;
};

const GroupSummaryPage = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');

  const {
    data: groupData,
    isError: isGroupError,
    error: groupError,
  } = useGetFinalMeetingGroupInfo();

  const toast = useToast();
  const modal = useModal({
    title: '',
    description: errorText,
    mainButtonCallback: () => navigate('/auth/main'),
    isSideButton: false,
  });

  useEffect(() => {
    if (isGroupError) {
      setErrorText(errorHandler(groupError));
      modal.open();
    }
  }, [isGroupError, groupError]);

  const groupUserInfo = groupData?.meetingTeamUserProfiles.map((user) => {
    return {
      name: user.name,
      department: user.department,
      studentNumber: user.studentNumber,
      age: user.age,
      interest: user.interest,
      kakaoTalkId: user.kakaoTalkId,
    };
  });
  console.log(groupData);

  return (
    <S.Background>
      {modal.render()}
      <Header
        title={'3대3 신청하기'}
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
          {!isGroupError && (
            <S.CardContainer>
              <Text color="Blue2" typograph="titleMedium">
                {`From. ${groupData?.teamName}`}
              </Text>

              <>
                {groupUserInfo?.map((userInfo) => (
                  <GroupSummaryCard
                    key={`userInfo-${userInfo.kakaoTalkId}`}
                    toast={toast}
                    userInfo={userInfo}
                  />
                ))}
              </>
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
              navigate('/auth/private-policy?type=group');
            }}
          >
            다음
          </Button>
        </div>
      </S.ButtonWrapper>
    </S.Background>
  );
};
export default GroupSummaryPage;
