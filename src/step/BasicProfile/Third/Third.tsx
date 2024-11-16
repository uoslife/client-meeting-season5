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

const Third = (props: {
  onNext: ({ interest }: Pick<OptionalProfileType, 'interest'>) => void;
}): ReactNode => {
  const [interestOptions, setInterestOptions] = useState<string[]>([]);
  const handleSelectedChange = (value: string) => {
    if (interestOptions.includes(value)) {
      setInterestOptions((prev) => prev.filter((option) => option !== value));
    } else if (interestOptions.length < 5) {
      setInterestOptions((prev) => [...prev, value]);
    } else {
      alert('최대 5개까지만 선택할 수 있습니다.');
    }
    console.log(interestOptions);
  };

  const interestForm = useInterestForm();
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
          요즘 빠져있는게 있다면?
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
          interestOptions={interestOptions}
          onSelectedChange={handleSelectedChange}
        />,
      )}
    </S.FormContainer>
  );
};
export default Third;
