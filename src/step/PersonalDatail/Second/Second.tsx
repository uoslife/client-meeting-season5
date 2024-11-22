import { ReactNode, useMemo, useState } from 'react';
import {
  OptionalProfileType,
  SecondType,
} from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
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
import HeightRangeSlider from '../../../components/feature/HeightRangeSlider';
const Second = (props: {
  context: SecondType;
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

  const [heightValue, setHeightValue] = useState<number[]>([160, 190]);

  const submitHandler = async () => {
    // 여기서 hook form handlesubmit
    props.onNext({
      targetAge: idealForm.getValues('counterAge'),
      targetHeight: idealForm.getValues('counterHeight'),
      targetMbti: idealForm.getValues('counterMbti'),
      targetAppearanceType: idealForm.getValues('counterAppearanceType'),
      targetSmoking: idealForm.getValues('counterSmoking'),
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
            defaultValue: props.context.targetAge,
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
            defaultValue: props.context.targetHeight,
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
            placeholder: 'MBTI를 선택해 주세요.',
            defaultValue: props.context.targetMbti,
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
            placeholder: '얼굴상과 쌍꺼풀 종류를 선택해 주세요.',
            defaultValue: props.context.targetAppearanceType,
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
            defaultValue: props.context.targetSmoking,
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
            checked: String(ageForm.watch('age')).includes('5살 이상 연하'),
          },
          {
            ...age,
            value: '1~4살 연하',
            label: '1~4살 연하',
            checked: String(ageForm.watch('age')).includes('1~4살 연하'),
          },
          {
            ...age,
            value: '동갑',
            label: '동갑',
            checked: String(ageForm.watch('age')).includes('동갑'),
          },
          {
            ...age,
            value: '1~4살 연상',
            label: '1~4살 연상',
            checked: String(ageForm.watch('age')).includes('1~4살 연상'),
          },
          {
            ...age,
            value: '5살 이상 연상',
            label: '5살 이상 연상',
            checked: String(ageForm.watch('age')).includes('5살 이상 연상'),
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
            checked: String(mbtiForm.watch('mbtiFirst')).includes('E'),
          },
          {
            ...mbtiFirst,
            value: 'I',
            label: 'I',
            subLabel: '내향적',
            type: 'checkbox',
            checked: String(mbtiForm.watch('mbtiFirst')).includes('I'),
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
            checked: String(mbtiForm.watch('mbtiSecond')).includes('N'),
          },
          {
            ...mbtiSecond,
            value: 'S',
            label: 'S',
            subLabel: '감각적',
            type: 'checkbox',
            checked: String(mbtiForm.watch('mbtiSecond')).includes('S'),
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
            checked: String(mbtiForm.watch('mbtiThird')).includes('T'),
          },
          {
            ...mbtiThird,
            value: 'F',
            label: 'F',
            subLabel: '감정형',
            type: 'checkbox',
            checked: String(mbtiForm.watch('mbtiThird')).includes('F'),
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
            checked: String(mbtiForm.watch('mbtiFourth')).includes('J'),
          },
          {
            ...mbtiFourth,
            value: 'P',
            label: 'P',
            subLabel: '인식형',
            type: 'checkbox',
            checked: String(mbtiForm.watch('mbtiFourth')).includes('P'),
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
            checked: String(appearanceForm.watch('eyelid')).includes('유쌍'),
          },
          {
            ...eyelid,
            value: '속쌍',
            label: '속쌍',
            type: 'checkbox',
            checked: String(appearanceForm.watch('eyelid')).includes('속쌍'),
          },
          {
            ...eyelid,
            value: '무쌍',
            label: '무쌍',
            type: 'checkbox',
            checked: String(appearanceForm.watch('eyelid')).includes('무쌍'),
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
            checked: String(appearanceForm.watch('face')).includes('또렷'),
          },
          {
            ...face,
            value: '중간',
            label: '중간',
            type: 'checkbox',
            checked: String(appearanceForm.watch('face')).includes('중간'),
          },
          {
            ...face,
            value: '순한',
            label: '순한',
            type: 'checkbox',
            checked: String(appearanceForm.watch('face')).includes('순한'),
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
            checked: String(smokingForm.watch('cigarette')).includes('연초'),
          },
          {
            ...cigarette,
            value: '전자담배',
            label: '전자담배',
            type: 'checkbox',
            checked: String(smokingForm.watch('cigarette')).includes(
              '전자담배',
            ),
          },
          {
            ...cigarette,
            value: '비흡연',
            label: '비흡연',
            type: 'checkbox',
            checked: String(smokingForm.watch('cigarette')).includes('비흡연'),
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
      !(ageForm.watch('age') && ageForm.watch('age').length > 0),
    ),
    mainButtonCallback: () => {
      const age = ageForm.getValues('age');

      if (age.length === 5) {
        idealForm.setValue('counterAge', '상관없음');
        return;
      }
      idealForm.setValue('counterAge', age);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      idealForm.setValue('counterAge', '상관없음');
      ageForm.setValue(
        'age',
        '5살 이상 연하,1~4살 연하,동갑,1~4살 연상,5살 이상 연상',
      );
    },
  });
  const heightBottomSheet = useBottomSheet({
    title: '키',
    description: `${heightValue[0]} 이상 ~ ${heightValue[1]} 이하`,
    mainButtonText: '선택',
    mainButtonCallback: () => {
      idealForm.setValue(
        'counterHeight',
        `${heightValue[0]} 이상 ~ ${heightValue[1]} 이하`,
      );
    },
    isSideButton: false,
  });
  const mbtiDetailBottomSheet = useBottomSheet({
    title: 'MBTI',
    mainButtonText: '선택',
    mainButtonDisabled: !(
      mbtiForm.watch('mbtiFirst') &&
      mbtiForm.watch('mbtiFirst').length > 0 &&
      mbtiForm.watch('mbtiSecond') &&
      mbtiForm.watch('mbtiSecond').length > 0 &&
      mbtiForm.watch('mbtiThird') &&
      mbtiForm.watch('mbtiThird').length > 0 &&
      mbtiForm.watch('mbtiFourth') &&
      mbtiForm.watch('mbtiFourth').length > 0
    ),
    mainButtonCallback: () => {
      const mbtiFirst = mbtiForm.getValues('mbtiFirst');
      const mbtiSecond = mbtiForm.getValues('mbtiSecond');
      const mbtiThird = mbtiForm.getValues('mbtiThird');
      const mbtiFourth = mbtiForm.getValues('mbtiFourth');

      let mbti = (
        (mbtiFirst ? String(mbtiFirst) : '/') +
        '/' +
        (mbtiSecond ? String(mbtiSecond) : '/') +
        '/' +
        (mbtiThird ? String(mbtiThird) : '/') +
        '/' +
        String(mbtiFourth)
      ).replace('//', '/');

      if (mbti[0] === '/') mbti = mbti.slice(1);

      if (
        mbtiForm.watch('mbtiFirst').length === 2 &&
        mbtiForm.watch('mbtiSecond').length === 2 &&
        mbtiForm.watch('mbtiThird').length === 2 &&
        mbtiForm.watch('mbtiFourth').length === 2
      ) {
        idealForm.setValue('counterMbti', '상관없음');
        return;
      }
      idealForm.setValue('counterMbti', mbti);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      console.log(mbtiForm.getValues());
      idealForm.setValue('counterMbti', '상관없음');
      mbtiForm.setValue('mbtiFirst', 'EI');
      mbtiForm.setValue('mbtiSecond', 'NS');
      mbtiForm.setValue('mbtiThird', 'TF');
      mbtiForm.setValue('mbtiFourth', 'JP');
    },
  });
  const appearanceBottomSheet = useBottomSheet({
    title: '외모',
    mainButtonText: '선택',
    mainButtonDisabled: !(
      appearanceForm.watch('eyelid') &&
      String(appearanceForm.watch('eyelid')).length > 0 &&
      appearanceForm.watch('face') &&
      String(appearanceForm.watch('face')).length > 0
    ),
    mainButtonCallback: () => {
      const eyelid = appearanceForm.getValues('eyelid');
      const face = appearanceForm.getValues('face');
      if (eyelid.length === 3 && face.length) {
        idealForm.setValue('counterAppearanceType', '상관없음');
        return;
      }
      const appearance = eyelid + ' / ' + face;
      idealForm.setValue('counterAppearanceType', appearance);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      appearanceForm.setValue('eyelid', '유쌍,무쌍,속쌍');
      appearanceForm.setValue('face', '또렷,중간,순한');
      idealForm.setValue('counterAppearanceType', '상관없음');
    },
  });
  const smokingBottomSheet = useBottomSheet({
    title: '흡연 여부',
    mainButtonText: '선택',
    mainButtonDisabled: !(
      smokingForm.watch('cigarette') &&
      String(smokingForm.watch('cigarette')).length > 0
    ),
    mainButtonCallback: () => {
      const cigarette = smokingForm.getValues('cigarette');
      console.log(cigarette);
      if (cigarette === '연초,전자담배,비흡연') {
        idealForm.setValue('counterSmoking', '상관없음');
        return;
      }
      idealForm.setValue('counterSmoking', cigarette);
    },
    isSideButton: true,
    sideButtonCallback: () => {
      const smoking = smokingForm.getValues('cigarette');
      if (smoking.length === 3) {
        idealForm.setValue('counterSmoking', '상관없음');
        return;
      }
      smokingForm.setValue('cigarette', '연초,전자담배,비흡연');
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
          이제, 당신을 설레게 할 사람에
        </Text>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%', marginBottom: '40px' }}
        >
          대해 알려주세요.
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
                      if (title === '키') heightBottomSheet.open();
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
      {heightBottomSheet.render(
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 20,
          }}
        >
          <HeightRangeSlider value={heightValue} setValue={setHeightValue} />
        </div>,
      )}
      {mbtiDetailBottomSheet.render(<MbtiBottomSheet memo={mbtiMemo} />)}
      {appearanceBottomSheet.render(
        <AppearanceBottomSheet memo={appearanceMemo} />,
      )}
      {smokingBottomSheet.render(<SmokingBottomSheet memo={smokingMemo} />)}
      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => {}}
          disabled={
            !(
              (idealForm.watch('counterAge') || props.context.targetAge) &&
              (idealForm.watch('counterAppearanceType') ||
                props.context.targetAppearanceType) &&
              (idealForm.watch('counterHeight') ||
                props.context.targetHeight) &&
              (idealForm.watch('counterMbti') || props.context.targetMbti) &&
              (idealForm.watch('counterSmoking') || props.context.targetSmoking)
            )
          }
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Second;
