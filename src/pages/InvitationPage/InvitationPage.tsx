import { useFunnel } from '@use-funnel/react-router-dom';
import Header from '../../components/common/Header';
import First from '../../step/Invitation/First';
import Second from '../../step/Invitation/Second';
import Third from '../../step/Invitation/Third';
import Fourth from '../../step/Invitation/Fourth';
import { useNavigate } from 'react-router-dom';
import { UserInfoType } from '../../lib/types/meeting';

type FirstType = { userList?: UserInfoType[]; isTeamLeader?: boolean };
type SecondType = { userList?: UserInfoType[]; isTeamLeader: boolean };
type ThirdType = { userList?: UserInfoType[]; isTeamLeader: boolean };
export type FourthType = { userList: UserInfoType[]; isTeamLeader: boolean };

const InvitationPage = () => {
  // const userStatus = useGetUserStatus();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const userBranch = userStatus.data?.tripleTeamBranch;

  //   // if (userBranch === 'JUST_CREATED') {

  //   // } else if (userBranch === 'JOINED' || userBranch === 'COMPLETED') {
  //   //   navigate('/auth/main');
  //   // }
  // }, [userStatus.data]);

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

  switch (funnel.step) {
    case 'first':
      return (
        <>
          <Header
            title="3대3 시작하기"
            isGoBackButton={true}
            leftButtonCallback={() => {
              navigate(-1);
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
              navigate(-1);
            }}
          />
          <Second onNext={() => funnel.history.push('third')} />
        </>
      );
    case 'third':
      return (
        <>
          <Header
            title={funnel.context.isTeamLeader ? '팅 개설하기' : '팅 참여하기'}
            isGoBackButton={true}
            leftButtonCallback={() => {}}
          />
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
