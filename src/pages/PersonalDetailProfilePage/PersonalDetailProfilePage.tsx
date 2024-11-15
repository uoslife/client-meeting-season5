import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/PersonalDatail/First';
import Second from '../../step/PersonalDatail/Second';
import Third from '../../step/PersonalDatail/Third';
import Fourth from '../../step/PersonalDatail/Fourth';
import Fifth from '../../step/PersonalDatail/Fifth';

export interface BaseProfileType {
  myMbti: string;
  myHeight: number;
  myAppearanceType: string;
  mySmoking: string;
}
export interface OptionalProfileType {
  targetAge?: number;
  targetHeight?: number;
  targetMbti?: string;
  targetAppearanceType?: string;
  targetSmoking?: string;
  prefer?: string;
  avoidDepartment?: string;
  avoidStudentId?: number;
  course?: string;
}

type FirtstType = Partial<BaseProfileType & OptionalProfileType>;
type SecondType = BaseProfileType &
  Pick<
    OptionalProfileType,
    | 'targetAge'
    | 'targetHeight'
    | 'targetMbti'
    | 'targetAppearanceType'
    | 'targetSmoking'
  >;
type ThirdType = SecondType & Pick<OptionalProfileType, 'prefer'>;
type FourthType = ThirdType &
  Pick<OptionalProfileType, 'avoidStudentId' | 'avoidDepartment'>;
type FifthType = BaseProfileType & OptionalProfileType;

const PersonalDetailProfilePage = () => {
  const funnel = useFunnel<{
    first: FirtstType;
    second: SecondType;
    third: ThirdType;
    fourth: FourthType;
    fifth: FifthType;
  }>({
    id: 'personal-detail-profile',
    initial: {
      step: 'first',
      context: {},
    },
  });
  switch (funnel.step) {
    case 'first':
      return (
        <First
          onNext={({ myMbti, myHeight, myAppearanceType, mySmoking }) =>
            funnel.history.push('second', {
              myMbti,
              myHeight,
              myAppearanceType,
              mySmoking,
            })
          }
        />
      );
    case 'second':
      return (
        <Second
          onNext={({
            targetAge,
            targetHeight,
            targetMbti,
            targetAppearanceType,
            targetSmoking,
          }) =>
            funnel.history.push('third', {
              targetAge,
              targetHeight,
              targetMbti,
              targetAppearanceType,
              targetSmoking,
            })
          }
        />
      );
    case 'third':
      return (
        <Third
          onNext={({ prefer }) =>
            funnel.history.push('fourth', {
              prefer,
            })
          }
        />
      );
    case 'fourth':
      return (
        <Fourth
          onNext={({ avoidDepartment, avoidStudentId }) =>
            funnel.history.push('fifth', {
              avoidDepartment,
              avoidStudentId,
            })
          }
        />
      );
    case 'fifth':
      return (
        <Fifth
          onNext={({ course }) =>
            funnel.history.push('fifth', {
              course,
            })
          }
        />
      );
  }
};
export default PersonalDetailProfilePage;
