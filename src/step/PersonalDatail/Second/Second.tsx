import { ReactNode, useMemo } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import useIdealDetailForm from '../../../hooks/useIdealDetailForm';
import BasicInput from '../../../components/common/BasicInput';
import useBottomSheet from '../../../hooks/useBottomSheet';
import usePreferAgeForm from '../../../hooks/usePreferAgeForm';
import AgeBottomSheet from '../../../components/feature/AgeBottomSheet/AgeBottomSheet';
import useMbtiForm from '../../../hooks/useMbtiForm';
import MbtiBottomSheet from '../../../components/feature/MbtiBottomSheet';
import useAppearanceForm from '../../../hooks/useAppearance';
import AppearanceBottomSheet from '../../../components/feature/AppearanceBottomSheet';
import useSmokingForm from '../../../hooks/useSmokingForm';
import SmokingBottomSheet from '../../../components/feature/SmokingBottomSheet';
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
  const idealForm = useIdealDetailForm();
  const ageForm = usePreferAgeForm();
  const mbtiForm = useMbtiForm();
  const appearanceForm = useAppearanceForm();
  const smokingForm = useSmokingForm();

  const submitHandler = async () => {
    // 여기서 hook form handlesubmit
    props.onNext({
      targetAge: 25,
      targetHeight: 165,
      targetMbti: 'ENTJ',
      targetAppearanceType: 'GOOD',
      targetSmoking: 'FALSE',
    });
  };

  const idealMemo = useMemo(() => {
    const {
      counterAge,
      counterMbti,
      counterHeight,
      counterAppearanceType,
      counterSmoking,
      errors,
    } = idealForm;
    return [
      {
        title: '나이',
        type: 'readOnly',
        inputs: [
          {
            ...counterAge,
            placeholder: '나이 범위를 선택해 주세요.',
          },
        ],
        errors: errors.counterAge?.message,
      },
      {
        title: '키',
        type: 'readOnly',
        inputs: [
          {
            ...counterHeight,
            placeholder: '키를 선택해 주세요.',
          },
        ],
        errors: errors.counterHeight?.message,
      },
      {
        title: 'MBTI',
        type: 'readOnly',
        inputs: [
          {
            ...counterMbti,
            placeholder: '얼굴상과 쌍꺼풀 종류를 선택해 주세요.',
          },
        ],
        errors: errors.counterMbti?.message,
      },
      {
        title: '외모',
        type: 'readOnly',
        inputs: [
          {
            ...counterAppearanceType,
            placeholder: '관심사를 선택해 주세요.',
          },
        ],
        errors: errors.counterAppearanceType?.message,
      },
      {
        title: '흡연 여부',
        type: 'readOnly',
        inputs: [
          {
            ...counterSmoking,
            placeholder: '흡연 여부를 선택해 주세요.',
          },
        ],
        errors: errors.counterSmoking?.message,
      },
    ];
  }, [idealForm]);
  const ageMemo = useMemo(() => {
    const { age, errors } = ageForm;
    return [
      {
        title: '',
        type: 'checkbox',
        inputs: [
          {
            ...age,
            value: '5살 이상 연하',
            label: '5살 이상 연하',
          },
          {
            ...age,
            value: '1~4살 연하',
            label: '1~4살 연하',
          },
          {
            ...age,
            value: '동갑',
            label: '동갑',
          },
          {
            ...age,
            value: '1~4살 연상',
            label: '1~4살 연상',
          },
          {
            ...age,
            value: '5살 이상 연상',
            label: '5살 이상 연상',
          },
        ],
        errors: errors.age?.message,
      },
    ];
  }, [ageForm]);
  const mbtiMemo = useMemo(() => {
    const { mbtiFirst, mbtiSecond, mbtiThird, mbtiFourth, errors } = mbtiForm;
    return [
      {
        title: 'mbtiFirst',
        type: 'checkbox',
        inputs: [
          {
            ...mbtiFirst,
            value: 'E',
            label: 'E',
            subLabel: '외향적',
            type: 'checkbox',
          },
          {
            ...mbtiFirst,
            value: 'I',
            label: 'I',
            subLabel: '내향적',
            type: 'checkbox',
          },
        ],
        errors: errors.mbtiFirst?.message,
      },
      {
        title: 'mbtiSecond',
        type: 'checbox',
        inputs: [
          {
            ...mbtiSecond,
            value: 'N',
            label: 'N',
            subLabel: '직관형',
            type: 'checkbox',
          },
          {
            ...mbtiSecond,
            value: 'S',
            label: 'S',
            subLabel: '감각적',
            type: 'checkbox',
          },
        ],
        errors: errors.mbtiSecond?.message,
      },
      {
        title: 'mbtiThird',
        type: 'checkbox',
        inputs: [
          {
            ...mbtiThird,
            value: 'T',
            label: 'T',
            subLabel: '사고형',
            type: 'checkbox',
          },
          {
            ...mbtiThird,
            value: 'F',
            label: 'F',
            subLabel: '감정형',
            type: 'checkbox',
          },
        ],
        errors: errors.mbtiThird?.message,
      },
      {
        title: 'mbtiFourth',
        type: 'checkbox',
        inputs: [
          {
            ...mbtiFourth,
            value: 'J',
            label: 'J',
            subLabel: '계획형',
            type: 'checkbox',
          },
          {
            ...mbtiFourth,
            value: 'P',
            label: 'P',
            subLabel: '인식형',
            type: 'checkbox',
          },
        ],
        errors: errors.mbtiFourth?.message,
      },
    ];
  }, [mbtiForm]);
  const appearanceMemo = useMemo(() => {
    const { eyelid, face, errors } = appearanceForm;
    return [
      {
        title: '쌍꺼풀',
        type: 'radio',
        inputs: [
          {
            ...eyelid,
            value: '유쌍',
            label: '유쌍',
            type: 'checkbox',
          },
          {
            ...eyelid,
            value: '속쌍',
            label: '속쌍',
            type: 'checkbox',
          },
          {
            ...eyelid,
            value: '무쌍',
            label: '무쌍',
            type: 'checkbox',
          },
        ],
        errors: errors.eyelid?.message,
      },
      {
        title: '얼굴상',
        type: 'radio',
        inputs: [
          {
            ...face,
            value: '또렷',
            label: '또렷',
            type: 'checkbox',
          },
          {
            ...face,
            value: '중간',
            label: '중간',
            type: 'checkbox',
          },
          {
            ...face,
            value: '순한',
            label: '순한',
            type: 'checkbox',
          },
        ],
        errors: errors.face?.message,
      },
    ];
  }, [appearanceForm]);
  const smokingMemo = useMemo(() => {
    const { cigarette, errors } = smokingForm;
    return [
      {
        title: '',
        type: 'radio',
        inputs: [
          {
            ...cigarette,
            value: '연초',
            label: '연초',
            type: 'checkbox',
          },
          {
            ...cigarette,
            value: '전자담배',
            label: '전자담배',
            type: 'checkbox',
          },
          {
            ...cigarette,
            value: '비흡연',
            label: '비흡연',
            type: 'checkbox',
          },
        ],
        errors: errors.cigarette?.message,
      },
    ];
  }, [smokingForm]);
  const ageBottomSheet = useBottomSheet({
    title: '나이',
    description: '희망하는 선택지를 모두 선택해 주세요.',
    mainButtonText: '선택',
    mainButtonDisabled: Boolean(
      ageForm.watch('age') && !ageForm.watch('age').length,
    ),
    mainButtonCallback: () => {
      const age = ageForm.getValues('age');
      idealForm.setValue('counterAge', age);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      idealForm.setValue('counterAge', '상관없음');
    },
  });
  const mbtiDetailBottomSheet = useBottomSheet({
    title: 'MBTI',
    mainButtonText: '선택',
    mainButtonDisabled: !(
      mbtiForm.watch('mbtiFirst') &&
      mbtiForm.watch('mbtiSecond') &&
      mbtiForm.watch('mbtiThird') &&
      mbtiForm.watch('mbtiFourth')
    ),
    mainButtonCallback: () => {
      const mbtiFirst = mbtiForm.getValues('mbtiFirst');
      const mbtiSecond = mbtiForm.getValues('mbtiSecond');
      const mbtiThird = mbtiForm.getValues('mbtiThird');
      const mbtiFourth = mbtiForm.getValues('mbtiFourth');
      const mbti = mbtiFirst + mbtiSecond + mbtiThird + mbtiFourth;
      idealForm.setValue('counterMbti', mbti);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      idealForm.setValue('counterMbti', '상관없음');
    },
  });
  const appearanceBottomSheet = useBottomSheet({
    title: '외모',
    mainButtonText: '선택',
    mainButtonDisabled: !(
      appearanceForm.watch('eyelid') && appearanceForm.watch('face')
    ),
    mainButtonCallback: () => {
      const eyelid = appearanceForm.getValues('eyelid');
      const face = appearanceForm.getValues('face');
      const appearance = eyelid + ' / ' + face;
      idealForm.setValue('counterAppearanceType', appearance);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      idealForm.setValue('counterAppearanceType', '상관없음');
    },
  });
  const smokingBottomSheet = useBottomSheet({
    title: '흡연 여부',
    mainButtonText: '선택',
    mainButtonDisabled: !smokingForm.watch('cigarette'),
    mainButtonCallback: () => {
      const cigarette = smokingForm.getValues('cigarette');
      idealForm.setValue('counterSmoking', cigarette);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      idealForm.setValue('counterSmoking', '상관없음');
    },
  });
  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={2} />
        </S.IndicatorBox>

        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%' }}
        >
          두근두근, 당신의 마음을
        </Text>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%', marginBottom: '40px' }}
        >
          설레게 할 사람은?
        </Text>
        {idealMemo.map(({ title, type, inputs, errors }) => {
          return (
            <S.InputWrapper key={title}>
              <Text typograph={'bodyMediumSemiBold'} color={'Blue70'}>
                {title}
              </Text>
              {type === 'readOnly' &&
                inputs.map((input) => (
                  <BasicInput
                    readOnly
                    key={input.name}
                    {...input}
                    onClick={() => {
                      if (title === '나이') ageBottomSheet.open();
                      if (title === 'MBTI') mbtiDetailBottomSheet.open();
                      // if (title === '키') heightBottomSheet.open();
                      if (title === '외모') appearanceBottomSheet.open();
                      if (title === '흡연 여부') smokingBottomSheet.open();
                    }}
                  />
                ))}
              {errors && (
                <Text typograph={'labelMediumSemiBold'} color={'Red60'}>
                  {errors}
                </Text>
              )}
            </S.InputWrapper>
          );
        })}
      </S.MainContainer>

      {ageBottomSheet.render(<AgeBottomSheet memo={ageMemo} />)}
      {mbtiDetailBottomSheet.render(<MbtiBottomSheet memo={mbtiMemo} />)}
      {appearanceBottomSheet.render(
        <AppearanceBottomSheet memo={appearanceMemo} />,
      )}
      {smokingBottomSheet.render(<SmokingBottomSheet memo={smokingMemo} />)}
      <S.ButtonWrapper>
        <Button buttonColor="primary" type="submit" onClick={() => {}}>
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Second;
