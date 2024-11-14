import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/webmail/First';
import Second from '../../step/webmail/Second';
import Third from '../../step/webmail/Third';

type FirstType = { webmail?: string; code?: string };
type SecondType = { webmail: string; code?: string };
type ThirdType = { webmail: string; code: string };

const WebMailPage = () => {
  const funnel = useFunnel<{
    first: FirstType;
    second: SecondType;
    third: ThirdType;
  }>({
    id: 'webmail',
    initial: {
      step: 'first',
      context: {},
    },
  });

  switch (funnel.step) {
    case 'first':
      return (
        <First
          onNext={(webmail) => funnel.history.push('second', { webmail })}
        />
      );
    case 'second':
      return (
        <Second
          webmail={funnel.context.webmail}
          onNext={(code) => funnel.history.push('third', { code })}
        />
      );
    case 'third':
      return <Third />;
  }
};
export default WebMailPage;
