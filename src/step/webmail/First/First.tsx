import { ReactNode } from 'react';

const First = (props: { onNext: (email: string) => void }): ReactNode => {
  return (
    <>
      첫번째
      <button onClick={() => props.onNext('웹메일')}>다음</button>
    </>
  );
};
export default First;
