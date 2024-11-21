import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/GroupDetail/First';
import Second from '../../step/GroupDetail/Second';
import Third from '../../step/GroupDetail/Third';
import Fourth from '../../step/GroupDetail/Fourth';
import Header from '../../components/common/Header';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';

type FirstType = {
  name?: string;
  minAge?: number;
  maxAge?: number;
  mood?: string;
};
type SecondType = {
  name: string;
  minAge?: number;
  maxAge?: number;
  mood?: string;
};
type ThirdType = {
  name: string;
  minAge: number;
  maxAge: number;
  mood?: string;
};
export type FourthType = {
  name: string;
  minAge: number;
  maxAge: number;
  mood: string;
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
  console.log(funnel.context);
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
                minAge,
                maxAge,
              }: {
                minAge: number;
                maxAge: number;
              }) =>
                funnel.history.push('third', {
                  minAge,
                  maxAge,
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
              onNext={({ mood }) =>
                funnel.history.push('fourth', {
                  mood,
                })
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
            />
            <Fourth />
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
