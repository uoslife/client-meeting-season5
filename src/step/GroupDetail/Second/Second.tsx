import { ReactNode } from 'react';
const Second = (props: {
  onNext: ({ minAge, maxAge }: { minAge: number; maxAge: number }) => void;
}): ReactNode => {
  return (
    <>
      두번째
      <button
        onClick={() =>
          props.onNext({
            minAge: 22,
            maxAge: 25,
          })
        }
      >
        다음
      </button>
    </>
  );
};
export default Second;
