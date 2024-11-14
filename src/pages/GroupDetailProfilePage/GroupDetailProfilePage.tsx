import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/GroupDetail/First';
import Second from '../../step/GroupDetail/Second';
import Third from '../../step/GroupDetail/Third';
import Fourth from '../../step/GroupDetail/Fourth';

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
type FourthType = {
  name: string;
  minAge: number;
  maxAge: number;
  mood: string;
};

const GroupDatailProfilePage = () => {
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

  switch (funnel.step) {
    case 'first':
      return (
        <First
          onNext={({ name }) =>
            funnel.history.push('second', {
              name,
            })
          }
        />
      );
    case 'second':
      return (
        <Second
          onNext={({ minAge, maxAge }: { minAge: number; maxAge: number }) =>
            funnel.history.push('third', {
              minAge,
              maxAge,
            })
          }
        />
      );
    case 'third':
      return (
        <Third
          onNext={({ mood }) =>
            funnel.history.push('fourth', {
              mood,
            })
          }
        />
      );
    case 'fourth':
      return <Fourth />;
  }
};
export default GroupDatailProfilePage;
