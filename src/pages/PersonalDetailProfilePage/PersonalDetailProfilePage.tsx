import { useFunnel } from '@use-funnel/react-router-dom';
import First from '../../step/PersonalDatail/First';
import Second from '../../step/PersonalDatail/Second';
import Third from '../../step/PersonalDatail/Third';
import Fourth from '../../step/PersonalDatail/Fourth';
import Fifth from '../../step/PersonalDatail/Fifth';
import Sixth from '../../step/PersonalDatail/Sixth';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import { useGetMeetingPersonalInfo } from '../../hooks/api/useMeetingPersonalInfo';
import { useEffect } from 'react';
import { COLORS } from '../../lib/constants';

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
  const meetingPersonalInfo = useGetMeetingPersonalInfo();
  useEffect(() => {
    if (meetingPersonalInfo.isSuccess) {
      navigate('/auth/summary/personal');
    }
  }, [meetingPersonalInfo.isSuccess]);

  const roomBoomModal = useModal({
    title: '신청을 취소하시겠습니까?',
    description: '지금까지 진행 중이던 작업이 모두 취소돼요.',
    isSideButton: true,
    mainButtonText: '신청 취소하기',
    sideButtonText: '닫기',
    mainButtonCallback: () => navigate('/auth/main'),
  });
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
          <Header
            title="1대1 신청하기"
            isGoBackButton={true}
            leftButtonCallback={() => navigate('/auth/main')}
            rightButtonType="close"
            rightButtonCallback={roomBoomModal.open}
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
          {roomBoomModal.render()}
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
            rightButtonType="close"
            rightButtonCallback={roomBoomModal.open}
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
          {roomBoomModal.render()}
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
            rightButtonType="close"
            rightButtonCallback={roomBoomModal.open}
          />
          <Third
            context={funnel.context}
            onNext={({ prefer }) =>
              funnel.history.replace('fourth', {
                prefer,
              })
            }
          />
          {roomBoomModal.render()}
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
            rightButtonType="close"
            rightButtonCallback={roomBoomModal.open}
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
          {roomBoomModal.render()}
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
            rightButtonType="close"
            rightButtonCallback={roomBoomModal.open}
          />
          <Fifth
            context={funnel.context}
            onNext={({ course }) =>
              funnel.history.push('sixth', {
                course,
              })
            }
          />
          {roomBoomModal.render()}
        </>
      );
    case 'sixth':
      return (
        <>
          <Header
            title="1대1 신청하기"
            isGoBackButton={true}
            leftButtonCallback={() =>
              funnel.history.replace('fifth', funnel.context)
            }
            rightButtonType="close"
            rightButtonCallback={roomBoomModal.open}
            style={{
              background: COLORS.Blue2,
            }}
          />
          <Sixth context={funnel.context} />
          {roomBoomModal.render()}
        </>
      );
  }
};
export default PersonalDetailProfilePage;
