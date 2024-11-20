import { useFunnel } from '@use-funnel/react-router-dom';
import Header from '../../components/common/Header';
import First from '../../step/Invitation/First';
import Second from '../../step/Invitation/Second';
import Third from '../../step/Invitation/Third';
import Fourth from '../../step/Invitation/Fourth';

type FirstType = { userList?: string[]; isTeamLeader?: boolean };
type SecondType = { userList?: string[]; isTeamLeader: boolean };
type ThirdType = { userList?: string[]; isTeamLeader: boolean };
export type FourthType = { userList: string[]; isTeamLeader: boolean };

const InvitationPage = () => {
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
          <Header title="3대3 시작하기" isGoBackButton={true} />
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
          <Header title="3대3 시작하기" isGoBackButton={true} />
          <Second onNext={() => funnel.history.push('third')} />
        </>
      );
    case 'third':
      return (
        <>
          <Header
            title={funnel.context.isTeamLeader ? '팅 개설하기' : '팅 참여하기'}
            isGoBackButton={true}
          />
          <Third
            isTeamLeader={funnel.context.isTeamLeader}
            onNext={(userList) => funnel.history.push('fourth', { userList })}
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
