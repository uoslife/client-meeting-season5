import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/Webmail/First';
import Second from '../../step/Webmail/Second';
import Third from '../../step/Webmail/Third';

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
