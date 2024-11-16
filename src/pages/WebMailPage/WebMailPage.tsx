import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/webmail/First';
import Second from '../../step/webmail/Second';
import Third from '../../step/webmail/Third';
import Header from '../../components/common/Header';

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
        <>
          <Header
            title="웹메일 인증하기"
            leftButtonCallback={() => funnel.history.back()}
          />
          <First
            onNext={(webmail) => funnel.history.push('second', { webmail })}
          />
        </>
      );
    case 'second':
      return (
        <>
          <Header
            title="웹메일 인증하기"
            leftButtonCallback={() => funnel.history.back()}
          />
          <Second
            webmail={funnel.context.webmail}
            onNext={(code) => funnel.history.push('third', { code })}
          />
        </>
      );
    case 'third':
      return <Third />;
  }
};
export default WebMailPage;
