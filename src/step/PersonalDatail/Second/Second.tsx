import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
const Second = (props: {
  onNext: ({
    targetAge,
    targetHeight,
    targetMbti,
    targetAppearanceType,
    targetSmoking,
  }: Pick<
    OptionalProfileType,
    | 'targetAge'
    | 'targetHeight'
    | 'targetMbti'
    | 'targetAppearanceType'
    | 'targetSmoking'
  >) => void;
}): ReactNode => {
  return (
    <>
      두번째
      <button
        onClick={() =>
          props.onNext({
            targetAge: 25,
            targetHeight: 165,
            targetMbti: 'ENTJ',
            targetAppearanceType: 'GOOD',
            targetSmoking: 'FALSE',
          })
        }
      >
        다음
      </button>
    </>
  );
};
export default Second;
