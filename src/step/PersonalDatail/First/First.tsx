import { ReactNode } from 'react';
import { BaseProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
const First = (props: {
  onNext: ({
    myMbti,
    myHeight,
    myAppearanceType,
    mySmoking,
  }: BaseProfileType) => void;
}): ReactNode => {
  return (
    <>
      첫번째
      <button
        onClick={() =>
          props.onNext({
            myMbti: 'ENTJ',
            myHeight: 175,
            myAppearanceType: 'GOOD',
            mySmoking: 'TRUE',
          })
        }
      >
        다음
      </button>
    </>
  );
};
export default First;
