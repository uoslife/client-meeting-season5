import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/BasicProfile/First';
import Second from '../../step/BasicProfile/Second';
import Third from '../../step/BasicProfile/Third';
import Fourth from '../../step/BasicProfile/Fourth';

export interface BaseProfileType {
  name: string;
  genderType: 'MALE' | 'FEMALE';
  age: number;
  phoneNumber: string;
  kakaoTalkId: string;
}

export interface OptionalProfileType {
  department?: string;
  studentId?: number;
  interest?: string[];
}

type FirstType = Partial<BaseProfileType & OptionalProfileType>;
type SecondType = BaseProfileType & Partial<OptionalProfileType>;
type ThirdType = BaseProfileType &
  Pick<OptionalProfileType, 'department' | 'studentId'> &
  Partial<Pick<OptionalProfileType, 'interest'>>;
type FourthType = BaseProfileType & OptionalProfileType;

const BasicProfilePage = () => {
  const funnel = useFunnel<{
    first: FirstType;
    second: SecondType;
    third: ThirdType;
    fourth: FourthType;
  }>({
    id: 'basic-profile',
    initial: {
      step: 'first',
      context: {},
    },
  });

  switch (funnel.step) {
    case 'first':
      return (
        <First
          onNext={({ name, genderType, age, phoneNumber, kakaoTalkId }) =>
            funnel.history.push('second', {
              name,
              genderType,
              age,
              phoneNumber,
              kakaoTalkId,
            })
          }
        />
      );
    case 'second':
      return (
        <Second
          onNext={({ department, studentId }) =>
            funnel.history.push('third', {
              department,
              studentId,
            })
          }
        />
      );
    case 'third':
      return (
        <Third
          onNext={({ interest }) =>
            funnel.history.push('fourth', {
              interest,
            })
          }
        />
      );
    case 'fourth':
      return <Fourth />;
  }

  return <>BasicProfilePage</>;
};
export default BasicProfilePage;
