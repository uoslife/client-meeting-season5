import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
const Fourth = (props: {
  onNext: ({
    avoidDepartment,
    avoidStudentId,
  }: Pick<OptionalProfileType, 'avoidDepartment' | 'avoidStudentId'>) => void;
}): ReactNode => {
  return (
    <>
      네번쨰
      <button
        onClick={() =>
          props.onNext({
            avoidDepartment: '컴퓨터과학부',
            avoidStudentId: 2024,
          })
        }
      >
        다음
      </button>
    </>
  );
};
export default Fourth;
