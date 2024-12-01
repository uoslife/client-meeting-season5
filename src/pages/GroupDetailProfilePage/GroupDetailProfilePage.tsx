import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/GroupDetail/First';
import Second from '../../step/GroupDetail/Second';
import Third from '../../step/GroupDetail/Third';
import Fourth from '../../step/GroupDetail/Fourth';
import Header from '../../components/common/Header';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { UserInfoType } from '../../lib/types/meeting';
import { COLORS } from '../../lib/constants';

export type MoodType = 'ACTICE' | 'CALM';

type FirstType = {
  name?: string;
  ageMin?: number;
  ageMax?: number;
  mood?: string;
  userList?: UserInfoType[];
};
type SecondType = {
  name: string;
  ageMin?: number;
  ageMax?: number;
  mood?: string;
  userList?: UserInfoType[];
};
type ThirdType = {
  name: string;
  ageMin: number;
  ageMax: number;
  mood?: string;
  userList?: UserInfoType[];
};
export type FourthType = {
  name: string;
  ageMin: number;
  ageMax: number;
  mood: string;
  userList?: UserInfoType[];
};

const GroupDatailProfilePage = () => {
  const navigate = useNavigate();
  const funnel = useFunnel<{
    first: FirstType;
    second: SecondType;
    third: ThirdType;
    fourth: FourthType;
  }>({
    id: 'group-detail-profile',
    initial: {
      step: 'first',
      context: {},
    },
  });

  const roomBoomModal = useModal({
    title: '신청을 취소하시겠습니까?',
    description: '지금까지 진행 중이던 작업이 모두 취소돼요.',
    isSideButton: true,
    mainButtonText: '신청 취소하기',
    sideButtonText: '닫기',
    mainButtonCallback: () => navigate('/auth/main'),
  });

  const FunnelComponent = () => {
    switch (funnel.step) {
      case 'first':
        return (
          <>
            <Header
              title={'3대3 신청하기'}
              isGoBackButton={false}
              rightButtonType={'logout'}
              rightButtonCallback={() => roomBoomModal.open()}
            />
            <First
              context={funnel.context}
              onNext={({ name }) =>
                funnel.history.push('second', {
                  name,
                })
              }
            />
          </>
        );
      case 'second':
        return (
          <>
            <Header
              title={'3대3 신청하기'}
              isGoBackButton={true}
              leftButtonCallback={() =>
                funnel.history.push('first', funnel.context)
              }
              rightButtonType={'logout'}
              rightButtonCallback={() => roomBoomModal.open()}
            />
            <Second
              context={funnel.context}
              onNext={({
                ageMin,
                ageMax,
              }: {
                ageMin: number;
                ageMax: number;
              }) =>
                funnel.history.push('third', {
                  ageMin,
                  ageMax,
                })
              }
            />
          </>
        );
      case 'third':
        return (
          <>
            <Header
              title={'3대3 신청하기'}
              isGoBackButton={true}
              leftButtonCallback={() =>
                funnel.history.push('second', funnel.context)
              }
              rightButtonType={'logout'}
              rightButtonCallback={() => roomBoomModal.open()}
            />
            <Third
              context={funnel.context}
              onNext={({ mood }: { mood: string }) =>
                funnel.history.push('fourth', { mood })
              }
            />
          </>
        );
      case 'fourth':
        return (
          <>
            <Header
              title={'3대3 신청하기'}
              isGoBackButton={true}
              leftButtonCallback={() =>
                funnel.history.push('third', funnel.context)
              }
              rightButtonType={'logout'}
              rightButtonCallback={() => roomBoomModal.open()}
              style={{ background: COLORS.Blue2 }}
            />
            <Fourth context={funnel.context} />
          </>
        );
    }
  };

  return (
    <>
      {roomBoomModal.render()}
      <FunnelComponent />
    </>
  );
};
export default GroupDatailProfilePage;
