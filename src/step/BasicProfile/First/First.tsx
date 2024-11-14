import { ReactNode } from 'react';
import { BaseProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';
const First = (props: {
  onNext: ({
    name,
    genderType,
    age,
    phoneNumber,
    kakaoTalkId,
  }: BaseProfileType) => void;
}): ReactNode => {
  return (
    <>
      첫번째
      <button
        onClick={() =>
          props.onNext({
            name: '홍길동',
            genderType: 'MALE',
            age: 12,
            phoneNumber: '01012345678',
            kakaoTalkId: 'asdf',
          })
        }
      >
        다음
      </button>
    </>
  );
};
export default First;
