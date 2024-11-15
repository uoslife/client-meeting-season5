import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';

const Third = (props: {
  onNext: ({ interest }: Pick<OptionalProfileType, 'interest'>) => void;
}): ReactNode => {
  return (
    <>
      세번째
      <button onClick={() => props.onNext({ interest: ['1', '2', '3'] })}>
        다음
      </button>
    </>
  );
};
export default Third;
