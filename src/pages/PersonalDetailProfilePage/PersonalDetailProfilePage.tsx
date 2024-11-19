import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/PersonalDatail/First';
import Second from '../../step/PersonalDatail/Second';
import Third from '../../step/PersonalDatail/Third';
import Fourth from '../../step/PersonalDatail/Fourth';
import Fifth from '../../step/PersonalDatail/Fifth';
import Sixth from '../../step/PersonalDatail/Sixth';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

export interface BaseProfileType {
  myMbti: string;
  myHeight: string;
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
  avoidDepartment?: string | null;
  avoidStudentId?: string | null;
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
type SixthType = BaseProfileType & OptionalProfileType;

const PersonalDetailProfilePage = () => {
  const navigate = useNavigate();
  const funnel = useFunnel<{
    first: FirtstType;
    second: SecondType;
    third: ThirdType;
    fourth: FourthType;
    fifth: FifthType;
    sixth: SixthType;
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
        <>
          <Header title="1대1 신청하기" isGoBackButton={false} />
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
        </>
      );
    case 'second':
      return (
        <>
          <Header title="1대1 신청하기" isGoBackButton={false} />
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
        </>
      );
    case 'third':
      return (
        <>
          <Header title="1대1 신청하기" isGoBackButton={false} />
          <Third
            context={funnel.context}
            onNext={({ prefer }) =>
              funnel.history.push('fourth', {
                prefer,
              })
            }
          />
        </>
      );
    case 'fourth':
      return (
        <>
          <Header title="1대1 신청하기" isGoBackButton={false} />
          <Fourth
            context={{
              avoidDepartment: funnel.context.avoidDepartment as string,
              avoidStudentId: funnel.context.avoidStudentId as string,
            }}
            onNext={({ avoidDepartment, avoidStudentId }) =>
              funnel.history.push('fifth', {
                avoidDepartment,
                avoidStudentId,
              })
            }
          />
        </>
      );
    case 'fifth':
      return (
        <>
          <Header title="1대1 신청하기" isGoBackButton={false} />
          <Fifth
            context={funnel.context}
            onNext={({ course }) =>
              funnel.history.push('sixth', {
                course,
              })
            }
          />
        </>
      );
    case 'sixth':
      return (
        <>
          <Header
            title="1대1 신청하기"
            rightButtonType={'close'}
            rightButtonCallback={() => navigate('/auth/main')}
          />
          <Sixth context={funnel.context} />
        </>
      );
  }
};
export default PersonalDetailProfilePage;
