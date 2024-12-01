import { useFunnel } from '@use-funnel/react-router-dom';
import Header from '../../components/common/Header';
import First from '../../step/Invitation/First';
import Second from '../../step/Invitation/Second';
import Third from '../../step/Invitation/Third';
import Fourth from '../../step/Invitation/Fourth';
import { useNavigate } from 'react-router-dom';
import { UserInfoType } from '../../lib/types/meeting';
import { useGetUserStatus } from '../../hooks/api/useUser';
import { useEffect, useState } from 'react';
import useModal from '../../hooks/useModal';
import {
  useDeleteMeetingGroup,
  useGetFinalMeetingGroupInfo,
} from '../../hooks/api/useMeetingGroupInfo';
import { errorHandler } from '../../utils/api';

type FirstType = { userList?: UserInfoType[]; isTeamLeader?: boolean };
type SecondType = { userList?: UserInfoType[]; isTeamLeader: boolean };
type ThirdType = { userList?: UserInfoType[]; isTeamLeader: boolean };
export type FourthType = { userList: UserInfoType[]; isTeamLeader: boolean };

const InvitationPage = () => {
  const navigate = useNavigate();
  const userStatus = useGetUserStatus();
  const deleteMutation = useDeleteMeetingGroup();
  const [errorText, setErrorText] = useState('');

  const meetingGroupInfo = useGetFinalMeetingGroupInfo();

  const roomBoomModal = useModal({
    title: '신청을 취소하시겠습니까?',
    description: '지금까지 진행 중이던 작업이 모두 취소돼요.',
    isSideButton: true,
    mainButtonText: '신청 취소하기',
    sideButtonText: '닫기',
    mainButtonCallback: () => {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
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
  const funnel = useFunnel<{
    first: FirstType;
    second: SecondType;
    third: ThirdType;
    fourth: FourthType;
  }>({
    id: 'invitation',
    initial: {
      step: 'first',
      context: {},
    },
  });

  useEffect(() => {
    const userBranch = userStatus.data?.tripleTeamBranch;
    if (userBranch === 'JUST_CREATED') {
      if (meetingGroupInfo.data?.preference) {
        navigate('/auth/summary/group');
      } else {
        funnel.history.push('third', { isTeamLeader: true });
      }
    } else if (userBranch === 'JOINED') {
      navigate('/auth/waiting');
    } else if (userBranch === 'COMPLETED') {
      navigate('/auth/result/group');
    }
  }, [userStatus.data, meetingGroupInfo.isSuccess]);

  switch (funnel.step) {
    case 'first':
      return (
        <>
          <Header
            title="3대3 시작하기"
            isGoBackButton={true}
            leftButtonCallback={() => {
              navigate('/auth/main');
            }}
          />
          <First
            onNextSecond={() =>
              funnel.history.push('second', { isTeamLeader: false })
            }
            onNextThird={() =>
              funnel.history.push('third', { isTeamLeader: true })
            }
          />
        </>
      );
    case 'second':
      return (
        <>
          <Header
            title="3대3 시작하기"
            isGoBackButton={true}
            leftButtonCallback={() => {
              navigate('/auth/invite');
            }}
          />
          <Second />
        </>
      );
    case 'third':
      return (
        <>
          <Header
            title={funnel.context.isTeamLeader ? '팅 개설하기' : '팅 참여하기'}
            isGoBackButton={true}
            leftButtonCallback={() => {
              navigate('/auth/main');
            }}
            rightButtonType="logout"
            rightButtonCallback={() => {
              roomBoomModal.open();
            }}
          />
          {roomBoomModal.render()}
          {errorModal.render()}
          <Third
            isTeamLeader={funnel.context.isTeamLeader}
            onNext={(userList) =>
              funnel.history.push('fourth', {
                userList: userList as UserInfoType[],
              })
            }
          />
        </>
      );
    case 'fourth':
      return (
        <>
          <Fourth context={funnel.context} />
        </>
      );
  }
};
export default InvitationPage;
