import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { useNavigate } from 'react-router-dom';
const Fifth = (props: {
  onNext: ({ course }: Pick<OptionalProfileType, 'course'>) => void;
}): ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      다섯번쨰
      <button
        onClick={() => {
          props.onNext({
            course: '드라이브',
          });
          navigate('/auth/summary');
        }}
      >
        다음
      </button>
    </>
  );
};
export default Fifth;
