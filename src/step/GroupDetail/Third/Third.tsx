import { ReactNode } from 'react';

const Third = (props: {
  onNext: ({ mood }: { mood: string }) => void;
}): ReactNode => {
  return (
    <>
      세번째
      <button onClick={() => props.onNext({ mood: 'drink' })}>다음</button>
    </>
  );
};
export default Third;
