import { ReactNode, useMemo, useState } from 'react';
import {
  BaseProfileType,
  FirtstType,
} from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Button from '../../../components/common/Button';
import Indicator from '../../../components/common/Indicator';
import Text from '../../../components/common/Text';
import usePersonalDetailForm from '../../../hooks/usePersonalDetailForm';
import BasicInput from '../../../components/common/BasicInput';
import useBottomSheet from '../../../hooks/useBottomSheet';
import Picker from '../../../components/common/Picker';
import useMbtiForm from '../../../hooks/useMbtiForm';
import MbtiBottomSheet from '../../../components/feature/MbtiBottomSheet';
import useAppearanceForm from '../../../hooks/useAppearance';
import AppearanceBottomSheet from '../../../components/feature/AppearanceBottomSheet';
import useSmokingForm from '../../../hooks/useSmokingForm';
import SmokingBottomSheet from '../../../components/feature/SmokingBottomSheet';
const First = (props: {
  context: FirtstType;
  onNext: ({
    myMbti,
    myHeight,
    myAppearanceType,
    mySmoking,
  }: BaseProfileType) => void;
}): ReactNode => {
  const [selectedHeight, setSelectedHeight] = useState<string>('');
  const list = Array.from(
    { length: 190 - 150 + 1 },
    (_, i) => (150 + i).toString() + 'cm',
  );
  const handleSelectedChange = (value: string) => {
    setSelectedHeight(value);
  };
  const personalDetailForm = usePersonalDetailForm();
  const mbtiForm = useMbtiForm();
  const appearancForm = useAppearanceForm();
  const smokingForm = useSmokingForm();
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
      personalDetailForm.setValue('myMbti', mbti);
    },
    isSideButton: false,
  });
  const heightBottomSheet = useBottomSheet({
    title: '키',
    mainButtonText: '선택',
    mainButtonDisabled: !selectedHeight,
    mainButtonCallback: () => {
      personalDetailForm.setValue('myHeight', selectedHeight);
    },
    isSideButton: false,
  });
  const appearanceBottomSheet = useBottomSheet({
    title: '외모',
    mainButtonText: '선택',
    mainButtonDisabled: !(
      appearancForm.watch('eyelid') && appearancForm.watch('face')
    ),
    mainButtonCallback: () => {
      const eyelid = appearancForm.getValues('eyelid');
      const face = appearancForm.getValues('face');
      const appearance = eyelid + ' / ' + face;
      personalDetailForm.setValue('myAppearanceType', appearance);
    },
    isSideButton: false,
  });
  const smokingBottomSheet = useBottomSheet({
    title: '흡연 여부',
    mainButtonText: '선택',
    mainButtonDisabled: !smokingForm.watch('cigarette'),
    mainButtonCallback: () => {
      const cigarette = smokingForm.getValues('cigarette');

      personalDetailForm.setValue('mySmoking', cigarette);
    },
    isSideButton: false,
  });
  const submitHandler = async () => {
    // 여기서 hook form handlesubmit
    props.onNext({
      myMbti: personalDetailForm.getValues('myMbti'),
      myHeight: personalDetailForm.getValues('myHeight'),
      myAppearanceType: personalDetailForm.getValues('myAppearanceType'),
      mySmoking: personalDetailForm.getValues('mySmoking'),
    });
  };

  const nextButtondisabled = !(
    personalDetailForm.watch('myMbti') &&
    personalDetailForm.watch('myHeight') &&
    personalDetailForm.watch('myAppearanceType') &&
    personalDetailForm.watch('mySmoking')
  );
  const personalDetailMemo = useMemo(() => {
    const { myMbti, myHeight, myAppearanceType, mySmoking, errors } =
      personalDetailForm;
    return [
      {
        title: 'MBTI',
        type: 'readOnly',
        inputs: [
          {
            ...myMbti,
            placeholder: 'MBTI을 선택해 주세요.',
            defaultValue: props.context.myMbti,
          },
        ],
        content: [
          {
            title: 'mbtiFirst',
            type: 'radio',
          },
        ],
        errors: errors.myMbti?.message,
      },
      {
        title: '키',
        type: 'readOnly',
        inputs: [
          {
            ...myHeight,
            placeholder: '키를 선택해 주세요.',
            defaultValue: props.context.myHeight,
          },
        ],
        errors: errors.myHeight?.message,
      },
      {
        title: '외모',
        type: 'readOnly',
        inputs: [
          {
            ...myAppearanceType,
            placeholder: '얼굴상과 쌍꺼풀 종류를 선택해 주세요.',
            defaultValue: props.context.myAppearanceType,
          },
        ],
        errors: errors.myAppearanceType?.message,
      },
      {
        title: '흡연 여부',
        type: 'readOnly',
        inputs: [
          {
            ...mySmoking,
            placeholder: '흡연 여부를 선택해 주세요.',
            defaultValue: props.context.mySmoking,
          },
        ],
        errors: errors.mySmoking?.message,
      },
    ];
  }, [personalDetailForm]);

  const mbtiMemo = useMemo(() => {
    const { mbtiFirst, mbtiSecond, mbtiThird, mbtiFourth, errors } = mbtiForm;
    return [
      {
        title: 'mbtiFirst',
        type: 'radio',
        inputs: [
          {
            ...mbtiFirst,
            value: 'E',
            label: 'E',
            subLabel: '외향적',
          },
          {
            ...mbtiFirst,
            value: 'I',
            label: 'I',
            subLabel: '내향적',
          },
        ],
        errors: errors.mbtiFirst?.message,
      },
      {
        title: 'mbtiSecond',
        type: 'radio',
        inputs: [
          {
            ...mbtiSecond,
            value: 'N',
            label: 'N',
            subLabel: '직관형',
          },
          {
            ...mbtiSecond,
            value: 'S',
            label: 'S',
            subLabel: '감각적',
          },
        ],
        errors: errors.mbtiSecond?.message,
      },
      {
        title: 'mbtiThird',
        type: 'radio',
        inputs: [
          {
            ...mbtiThird,
            value: 'T',
            label: 'T',
            subLabel: '사고형',
          },
          {
            ...mbtiThird,
            value: 'F',
            label: 'F',
            subLabel: '감정형',
          },
        ],
        errors: errors.mbtiThird?.message,
      },
      {
        title: 'mbtiFourth',
        type: 'radio',
        inputs: [
          {
            ...mbtiFourth,
            value: 'J',
            label: 'J',
            subLabel: '계획형',
          },
          {
            ...mbtiFourth,
            value: 'P',
            label: 'P',
            subLabel: '인식형',
          },
        ],
        errors: errors.mbtiFourth?.message,
      },
    ];
  }, [mbtiForm]);

  const appearanceMemo = useMemo(() => {
    const { eyelid, face, errors } = appearancForm;
    return [
      {
        title: '쌍꺼풀',
        type: 'radio',
        inputs: [
          {
            ...eyelid,
            value: '유쌍',
            label: '유쌍',
          },
          {
            ...eyelid,
            value: '속쌍',
            label: '속쌍',
          },
          {
            ...eyelid,
            value: '무쌍',
            label: '무쌍',
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
          },
          {
            ...face,
            value: '중간',
            label: '중간',
          },
          {
            ...face,
            value: '순한',
            label: '순한',
          },
        ],
        errors: errors.face?.message,
      },
    ];
  }, [appearancForm]);

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
          },
          {
            ...cigarette,
            value: '전자담배',
            label: '전자담배',
          },
          {
            ...cigarette,
            value: '비흡연',
            label: '비흡연',
          },
        ],
        errors: errors.cigarette?.message,
      },
    ];
  }, [smokingForm]);

  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={1} />
        </S.IndicatorBox>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%', marginBottom: '40px' }}
        >
          당신의 TMI를 알려주세요.
        </Text>
        {personalDetailMemo.map(({ title, type, inputs, errors }) => {
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
      {heightBottomSheet.render(
        <Picker
          list={list}
          onSelectedChange={handleSelectedChange}
          startIndex={21}
        />,
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
          disabled={nextButtondisabled}
          onClick={() => {}}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default First;
