import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
import { DepartmentType } from '../../lib/types/personalMeeting.type';
import useModal from '../../hooks/useModal';
import { useEffect, useState } from 'react';
import GroupSummaryCard from '../../components/feature/GroupSummaryCard';
import close from '../../lib/assets/icon/close-white.svg';
import { useMatchResult } from '../../hooks/api/useMatch';
import { personalUserInfoType } from '../PersonalSummaryPage/PersonalSummaryPage';

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
  const [groupUserInfo, setGroupUserInfo] = useState<personalUserInfoType[]>();

  const {
    data: groupData,
    isError: isGroupError,
    isPending: isGroupPending,
    error: groupError,
    isSuccess: isGroupSuccess,
  } = useMatchResult({ teamType: 'TRIPLE' });

  const toast = useToast();
  const modal = useModal({
    title: '',
    description: errorText,
    mainButtonCallback: () => navigate('/auth/final'),
    isSideButton: false,
  });

  useEffect(() => {
    if (isGroupError) {
      setErrorText('네트워크 상태가 불안정합니다. 새로고침 후 이용해주세요.');
      modal.open();
    }
  }, [isGroupError, groupError]);

  useEffect(() => {
    if (isGroupSuccess) {
      const groupUserInfo: personalUserInfoType[] =
        groupData?.partnerTeam.userProfiles.map((user) => {
          return {
            name: user.name,
            department: user.department,
            studentNumber: user.studentNumber,
            age: user.age,
            interest: user.interest,
            kakaoTalkId: user.kakaoTalkId,
            studentType: user.studentType,
          };
        });
      setGroupUserInfo(groupUserInfo);
    }
  }, [isGroupSuccess]);

  return (
    <S.Background>
      {modal.render()}
      <S.Container className="layout-padding">
        <S.MainContainer>
          <S.ContentWrapper>
            {!isGroupPending && !isGroupError && (
              <S.CardContainer>
                <Text color="Blue2" typograph="titleMedium">
                  {`From. ${groupData?.partnerTeam.teamName}`}
                </Text>
                <>
                  {groupUserInfo &&
                    groupUserInfo?.map((userInfo) => (
                      <GroupSummaryCard
                        key={`userInfo-${userInfo.kakaoTalkId}`}
                        toast={toast}
                        userInfo={userInfo}
                      />
                    ))}
                </>
              </S.CardContainer>
            )}

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
export default GroupSummaryPage;
