import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/webmail/First';
import Second from '../../step/webmail/Second';
import Third from '../../step/webmail/Third';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

type FirstType = { webmail?: string; code?: string };
type SecondType = { webmail: string; code?: string };
export type ThirdType = { webmail: string; code: string };

const WebMailPage = () => {
  const navigate = useNavigate();
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
            leftButtonCallback={() => navigate('/policy')}
          />
          <First
            webmail={funnel.context.webmail as string}
            onNext={(webmail) => funnel.history.push('second', { webmail })}
          />
        </>
      );
    case 'second':
      return (
        <>
          <Header
            title="웹메일 인증하기"
            leftButtonCallback={() =>
              funnel.history.push('first', funnel.context)
            }
          />
          <Second
            webmail={funnel.context.webmail}
            onNext={(code) => funnel.history.push('third', { code })}
          />
        </>
      );
    case 'third':
      return <Third context={funnel.context} />;
  }
};
export default WebMailPage;
