import { ReactNode, useMemo, useState } from 'react';
import { OptionalProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';
import { S } from './style';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import Indicator from '../../../components/common/Indicator';
import useInterestForm from '../../../hooks/useInterestForm';
import BasicInput from '../../../components/common/BasicInput';
import useBottomSheet from '../../../hooks/useBottomSheet';
import InterestOptions from '../../../components/feature/InterestOptions';
import useCreateInterestForm from '../../../hooks/useCreateInterestForm';
import { options } from '../../../components/feature/InterestOptions/InterestOptions';

const Third = (props: {
  onNext: ({ interest }: Pick<OptionalProfileType, 'interest'>) => void;
}): ReactNode => {
  const [interestOptions, setInterestOptions] = useState<string[]>([]);
  const [customOptions, setCustomOption] = useState<string[]>([]);
  const handleSelectedChange = (value: string) => {
    if (interestOptions.includes(value)) {
      setInterestOptions((prev) => prev.filter((option) => option !== value));
    } else if (interestOptions.length < 5) {
      setInterestOptions((prev) => [...prev, value]);
    } else {
      alert('최대 5개까지만 선택할 수 있습니다.');
      return;
    }
  };

  const interestForm = useInterestForm();
  const createInterestForm = useCreateInterestForm();

  const interestMemo = useMemo(() => {
    const { interests } = interestForm;
    return [
      {
        title: '관심사',
        type: 'readOnly',
        inputs: [
          {
            ...interests,
            placeholder: '관심사를 선택해 주세요.',
          },
        ],
      },
    ];
  }, [interestForm]);

  const createInterestMemo = useMemo(() => {
    const { customInterest } = createInterestForm;
    return [
      {
        title: '관심사',
        type: 'text',
        inputs: [
          {
            ...customInterest,
            placeholder: '관심사를 입력해 주세요.(최대 10자)',
          },
        ],
      },
    ];
  }, [createInterestForm]);

  const interestBottomSheet = useBottomSheet({
    title: '관심사',
    description: '최대 5개까지 선택 가능합니다.',
    mainButtonText: '선택',
    mainButtonDisabled: interestOptions.length == 0,
    mainButtonCallback: () => {
      interestForm.setValue('interests', interestOptions.toString());
    },
    isSideButton: false,
  });
  const createInterestBottomSheet = useBottomSheet({
    title: '관심사',
    description: '나만의 항목 추가',
    mainButtonText: '선택',
    mainButtonDisabled: !createInterestForm.watch('customInterest'),
    mainButtonCallback: () => {
      const item = createInterestForm.getValues('customInterest');
      if (item.trimStart() === '' || item.startsWith(' ')) {
        alert('잘못된 값입니다.');
        createInterestForm.setValue('customInterest', '');
        return;
      }
      if (createInterestForm.getValues('customInterest').length > 10) {
        alert('최대 10자까지만 입력할 수 있습니다.');
        createInterestForm.setValue('customInterest', '');
        return;
      }
      if (
        options.some(
          (option) => option === createInterestForm.getValues('customInterest'),
        )
      ) {
        alert('옵션이 존재합니다.');
        return;
      }
      if (!interestOptions.includes(item)) {
        if (interestOptions.length >= 5) {
          alert('최대 5개까지만 선택할 수 있습니다.');
          return;
        } else {
          setInterestOptions((prev) => {
            return [...prev, item];
          });
          setCustomOption((customOptions) => {
            return [...customOptions, item];
          });
          createInterestForm.setValue('customInterest', '');
          createInterestBottomSheet.close();
          interestBottomSheet.open();
        }
      } else {
        alert('이미 선택한 데이터입니다!');
        return;
      }
      return;
    },
    isSideButton: false,
  });
  const interestHandler = () => {
    interestBottomSheet.close();
    createInterestBottomSheet.open();
  };
  return (
    <S.FormContainer className="layout-padding">
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={3} currentLevel={3} />
        </S.IndicatorBox>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%', marginBottom: '40px' }}
        >
          요즘 빠져있는게 있나요?
        </Text>
        <BasicInput
          readOnly
          {...interestMemo[0].inputs[0]}
          onClick={() => {
            interestBottomSheet.open();
          }}
        />
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button
          type="submit"
          buttonColor="primary"
          disabled={!interestForm.watch('interests')}
          onClick={() => {
            props.onNext({ interest: interestOptions });
          }}
        >
          다음
        </Button>
      </S.ButtonWrapper>
      {interestBottomSheet.render(
        <InterestOptions
          handler={interestHandler}
          interestOptions={interestOptions}
          customOptions={customOptions}
          onSelectedChange={handleSelectedChange}
        />,
      )}
      {createInterestBottomSheet.render(
        <>
          {createInterestMemo.map(({ inputs }) =>
            inputs.map((input, index) => <BasicInput key={index} {...input} />),
          )}
        </>,
      )}
    </S.FormContainer>
  );
};
export default Third;
