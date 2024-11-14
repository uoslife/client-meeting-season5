import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';
const Second = (props: {
  onNext: ({
    department,
    studentId,
  }: Pick<OptionalProfileType, 'department' | 'studentId'>) => void;
}): ReactNode => {
  return (
    <>
      두번째
      <button
        onClick={() =>
          props.onNext({
            department: '부서',
            studentId: 2021,
          })
        }
      >
        다음
      </button>
    </>
  );
};
export default Second;
