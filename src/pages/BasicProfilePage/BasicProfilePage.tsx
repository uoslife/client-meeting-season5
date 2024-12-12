import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/BasicProfile/First';
import Second from '../../step/BasicProfile/Second';
import Third from '../../step/BasicProfile/Third';
import Fourth from '../../step/BasicProfile/Fourth';
import Header from '../../components/common/Header';

export interface BaseProfileType {
  name: string;
  genderType: '남성' | '여성';
  age: number;
  phoneNumber: string;
  kakaoTalkId: string;
}

export interface OptionalProfileType {
  studentType?: string | null;
  department?: string | null;
  studentId?: string | null;
  interest?: string[];
}

type FirstType = Partial<BaseProfileType & OptionalProfileType>;
type SecondType = BaseProfileType & Partial<OptionalProfileType>;
type ThirdType = BaseProfileType &
  Pick<OptionalProfileType, 'department' | 'studentId'> &
  Partial<Pick<OptionalProfileType, 'interest'>>;
export type FourthType = BaseProfileType & OptionalProfileType;

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
        <>
          <Header title="내 프로필 만들기" isGoBackButton={false} />
          <First
            context={{
              name: funnel.context.name as string,
              genderType: funnel.context.genderType as '남성' | '여성',
              age: funnel.context.age as number,
              phoneNumber: funnel.context.phoneNumber as string,
              kakaoTalkId: funnel.context.kakaoTalkId as string,
            }}
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
        </>
      );
    case 'second':
      return (
        <>
          <Header
            title="내 프로필 만들기"
            leftButtonCallback={() =>
              funnel.history.push('first', funnel.context)
            }
          />
          <Second
            onNext={({ studentType, department, studentId }) =>
              funnel.history.push('third', {
                studentType,
                department,
                studentId,
              })
            }
          />
        </>
      );
    case 'third':
      return (
        <>
          <Header
            title="내 프로필 만들기"
            leftButtonCallback={() =>
              funnel.history.push('second', funnel.context)
            }
          />
          <Third
            onNext={({ interest }) =>
              funnel.history.push('fourth', {
                interest,
              })
            }
          />
        </>
      );
    case 'fourth':
      return <Fourth context={funnel.context} />;
  }
};
export default BasicProfilePage;
