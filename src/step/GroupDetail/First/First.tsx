import { ReactNode } from 'react';
const First = (props: {
  onNext: ({ name }: { name: string }) => void;
}): ReactNode => {
  return (
    <>
      첫번째
      <button onClick={() => props.onNext({ name: '홍길동' })}>다음</button>
    </>
  );
};
export default First;
