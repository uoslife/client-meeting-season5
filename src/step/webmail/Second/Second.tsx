import { ReactNode } from 'react';

const Second = (props: {
  webmail: string;
  onNext: (code: string) => void;
}): ReactNode => {
  return (
    <>
      두번쨰
      <button onClick={() => props.onNext('third')}>다음</button>
    </>
  );
};
export default Second;
