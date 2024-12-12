import Text from '../../components/common/Text';
import {
  useDeleteMeetingGroup,
  useGetFinalMeetingGroupInfo,
} from '../../hooks/api/useMeetingGroupInfo';
import { COLORS } from '../../lib/constants';
import { UserInfoType } from '../../lib/types/meeting';
import { S } from './style';
import close from '../../lib/assets/icon/cancel-icon.svg';
import useModal from '../../hooks/useModal';
import { errorHandler } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { userInfoAtom } from '../../store/userInfo';

const ResultGroupPage = () => {
  const navigate = useNavigate();
  const meetingInfo = useGetFinalMeetingGroupInfo();
  const deleteMutation = useDeleteMeetingGroup();
  const [errorText, setErrorText] = useState('');
  const queryClient = useQueryClient();
  const userInfo = useAtomValue(userInfoAtom);

  useEffect(() => {
    if (meetingInfo.isError) {
      setErrorText(errorHandler(meetingInfo.error));
      errorModal.open();
    }
  }, [meetingInfo.isError]);

  const modal = useModal({
    title: '미팅 신청을 취소하시겠습니까?',
    description: '이번 크리스마스도 나 홀로 집에?',
    mainButtonCallback: () => {},
    isSideButton: true,
    sideButtonText: '신청 취소하기',
    mainButtonText: '다시 생각해볼래요',
    sideButtonCallback: () => {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['meetingTeamInfo', 'TRIPLE'],
          });
          navigate('/auth/main');
        },
        onError: (error) => {
          setErrorText(errorHandler(error));
          errorModal.open();
        },
      });
    },
  });
  const errorModal = useModal({
    title: errorText,
    mainButtonCallback: () => {
      navigate('/auth/main');
    },
    isSideButton: false,
  });
  return (
    <>
      <S.Container>
        <Header
          style={{ color: COLORS.Blue70 }}
          title="3대3 신청 정보"
          isGoBackButton={true}
          leftButtonCallback={() => {
            navigate('/auth/main');
          }}
        />
        <S.MainContainer className="layout-padding">
          <S.TeamUserContainer>
            <S.TeamTextWrapper>
              <Text typograph={'labelMediumSemiBold'} color="Blue70">
                팅 이름
              </Text>
              <Text typograph={'titleLarge'} color="Blue90">
                {meetingInfo.data?.teamName ? meetingInfo.data?.teamName : ''}
              </Text>
            </S.TeamTextWrapper>
            <S.UserListContainer>
              {meetingInfo &&
                meetingInfo.data?.meetingTeamUserProfiles.map(
                  (user: UserInfoType) => (
                    <S.UserItem key={user.name}>
                      <Text typograph={'bodyLargeMedium'} color="Blue90">
                        {user.name}
                      </Text>
                      {user.isLeader && <S.Pill>팅장</S.Pill>}
                    </S.UserItem>
                  ),
                )}
            </S.UserListContainer>
          </S.TeamUserContainer>
          <S.ContextContainer>
            <S.ContextWrapper>
              <Text typograph={'titleSmall'} color="Blue70">
                선호 상대 팅원의 나이
              </Text>
              <S.Text>
                {meetingInfo.data?.preference.ageMin} -{' '}
                {meetingInfo.data?.preference.ageMax}
                <span style={{ color: COLORS.Blue30 }}>세(연)</span>
              </S.Text>
            </S.ContextWrapper>
            <S.ContextWrapper>
              <Text typograph={'titleSmall'} color="Blue70">
                선호 미팅 분위기
              </Text>
              <S.Text>
                {meetingInfo.data?.preference.mood === 'CALM'
                  ? '차분하게 대화하고 싶어요.'
                  : '술 게임을 하면서 신나게 놀고 싶어요.'}
              </S.Text>
            </S.ContextWrapper>
          </S.ContextContainer>
          {meetingInfo.data?.meetingTeamUserProfiles.filter(
            (user) => user.name === userInfo.name,
          )[0].isLeader && (
            <S.CustomText
              onClick={() => {
                modal.open();
              }}
            >
              신청 취소 <img src={close} width={14} />
            </S.CustomText>
          )}
        </S.MainContainer>
        {modal.render()}
        {errorModal.render()}
      </S.Container>
    </>
  );
};
export default ResultGroupPage;
