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
  targetAge?: string;
  targetHeight?: string;
  targetMbti?: string;
  targetAppearanceType?: string;
  targetSmoking?: string;
  prefer?: string;
  avoidDepartment?: string | null;
  avoidStudentId?: string | null;
  course?: string;
}

export type FirtstType = Partial<BaseProfileType & OptionalProfileType>;
export type SecondType = BaseProfileType &
  Pick<
    OptionalProfileType,
    | 'targetAge'
    | 'targetHeight'
    | 'targetMbti'
    | 'targetAppearanceType'
    | 'targetSmoking'
  >;
export type ThirdType = SecondType & Pick<OptionalProfileType, 'prefer'>;
export type FourthType = ThirdType &
  Pick<OptionalProfileType, 'avoidStudentId' | 'avoidDepartment'>;
export type FifthType = BaseProfileType & OptionalProfileType;
export type SixthType = BaseProfileType & OptionalProfileType;

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
  console.log(funnel.context);
  switch (funnel.step) {
    case 'first':
      return (
        <>
          <Header
            title="1대1 신청하기"
            isGoBackButton={true}
            leftButtonCallback={() => navigate('/auth/main')}
          />
          <First
            context={funnel.context}
            onNext={({ myMbti, myHeight, myAppearanceType, mySmoking }) =>
              funnel.history.replace('second', {
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
          <Header
            title="1대1 신청하기"
            isGoBackButton={true}
            leftButtonCallback={() =>
              funnel.history.replace('first', funnel.context)
            }
          />
          <Second
            context={funnel.context}
            onNext={({
              targetAge,
              targetHeight,
              targetMbti,
              targetAppearanceType,
              targetSmoking,
            }) =>
              funnel.history.replace('third', {
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
          <Header
            title="1대1 신청하기"
            isGoBackButton={true}
            leftButtonCallback={() =>
              funnel.history.replace('second', funnel.context)
            }
          />
          <Third
            context={funnel.context}
            onNext={({ prefer }) =>
              funnel.history.replace('fourth', {
                prefer,
              })
            }
          />
        </>
      );
    case 'fourth':
      return (
        <>
          <Header
            title="1대1 신청하기"
            isGoBackButton={true}
            leftButtonCallback={() =>
              funnel.history.replace('third', funnel.context)
            }
          />
          <Fourth
            context={funnel.context}
            onNext={({ avoidDepartment, avoidStudentId }) =>
              funnel.history.replace('fifth', {
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
          <Header
            title="1대1 신청하기"
            isGoBackButton={true}
            leftButtonCallback={() =>
              funnel.history.replace('fourth', funnel.context)
            }
          />
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
            isGoBackButton={true}
            leftButtonCallback={() =>
              funnel.history.replace('fifth', funnel.context)
            }
          />
          <Sixth context={funnel.context} />
        </>
      );
  }
};
export default PersonalDetailProfilePage;
