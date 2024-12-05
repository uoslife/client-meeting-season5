import { useNavigate } from 'react-router-dom';
// import Header from '../../components/common/Header';
// import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import S from './style';
import useToast from '../../hooks/useToast';
import { DepartmentType } from '../../lib/types/personalMeeting.type';
// import useModal from '../../hooks/useModal';
// import { errorHandler } from '../../utils/api';
// import { useEffect, useState } from 'react';
// import { useGetFinalMeetingGroupInfo } from '../../hooks/api/useMeetingGroupInfo';
import GroupSummaryCard from '../../components/feature/GroupSummaryCard';
import close from '../../lib/assets/icon/close-white.svg';

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
  // const [errorText, setErrorText] = useState('');

  // const {
  //   data: groupData,
  //   isError: isGroupError,
  //   error: groupError,
  // } = useGetFinalMeetingGroupInfo();

  const toast = useToast();
  // const modal = useModal({
  //   title: '',
  //   description: errorText,
  //   mainButtonCallback: () => navigate('/auth/main'),
  //   isSideButton: false,
  // });

  // useEffect(() => {
  //   if (isGroupError) {
  //     setErrorText(errorHandler(groupError));
  //     modal.open();
  //   }
  // }, [isGroupError, groupError]);

  // const groupUserInfo = groupData?.meetingTeamUserProfiles.map((user) => {
  //   return {
  //     name: user.name,
  //     department: user.department,
  //     studentNumber: user.studentNumber,
  //     age: user.age,
  //     interest: user.interest,
  //     kakaoTalkId: user.kakaoTalkId,
  //     studentType: user.studentType,
  //   };
  // });
  const groupUserInfo = Array.from({ length: 3 }).map(() => {
    return {
      name: '조종빈',
      department: '컴퓨터과학부',
      studentNumber: 20,
      age: 22,
      interest: ['일번', '이번'],
      kakaoTalkId: 'jongbin26',
      studentType: 'UNDERGRADUATE',
    } as groupUserInfoType;
  });

  return (
    <S.Background>
      <S.Container className="layout-padding">
        <S.MainContainer>
          {/* {!isGroupError && (
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
          )} */}

          <S.ContentWrapper>
            <S.CardContainer>
              <Text color="Blue2" typograph="titleMedium">
                {`From. ${'팀이름'}`}
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
