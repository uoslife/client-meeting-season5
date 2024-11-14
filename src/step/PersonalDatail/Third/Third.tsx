import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
const Third = (props: {
  onNext: ({ prefer }: Pick<OptionalProfileType, 'prefer'>) => void;
}): ReactNode => {
  return (
    <>
      세번째
      <button onClick={() => props.onNext({ prefer: 'age' })}>다음</button>
    </>
  );
};
export default Third;
