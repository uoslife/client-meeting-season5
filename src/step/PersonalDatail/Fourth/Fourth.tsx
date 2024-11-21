import { ReactNode, useMemo, useState } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import useAvoidDepartment from '../../../hooks/useAvoidDepartment';
import Text from '../../../components/common/Text';
import BasicInput from '../../../components/common/BasicInput';
import useBottomSheet from '../../../hooks/useBottomSheet';
import DepartmentPicker from '../../../components/feature/DepartmentPicker';
import Picker from '../../../components/common/Picker';
const Fourth = (props: {
  context: OptionalProfileType;
  onNext: ({
    avoidDepartment,
    avoidStudentId,
  }: Pick<OptionalProfileType, 'avoidDepartment' | 'avoidStudentId'>) => void;
}): ReactNode => {
  const [avoidDepartment, setAvoidDepartment] = useState<string>(
    props.context.avoidDepartment ?? '',
  );
  const [avoidStudentId, setAvoidStudentId] = useState<string>(
    props.context.avoidStudentId ?? '',
  );
  const list = Array.from({ length: 15 }, (_, index) => String(2010 + index));

  const handleSelectedChange = (value: string) => {
    setAvoidStudentId(value);
  };

  const avoidDepartmentForm = useAvoidDepartment();
  const avoidDepartmentMemo = useMemo(() => {
    const { avoidDepartment, avoidStudentId } = avoidDepartmentForm;
    return [
      {
        title: '학과',
        type: 'readOnly',
        inputs: [
          {
            ...avoidDepartment,
            placeholder: '학과를 선택해주세요.',
            defaultValue: props.context.avoidDepartment,
          },
        ],
      },
      {
        title: '학번',
        type: 'readOnly',
        inputs: [
          {
            ...avoidStudentId,
            placeholder: '입학년도 선택해 주세요.',
            defaultValue: props.context.avoidStudentId,
          },
        ],
      },
    ];
  }, [avoidDepartmentForm]);

  const avoidDepartmentBottomSheet = useBottomSheet({
    title: '학과',
    mainButtonText: '선택',
    mainButtonDisabled: !avoidDepartment,
    mainButtonCallback: () => {
      avoidDepartmentForm.setValue('avoidDepartment', avoidDepartment);
    },
    isSideButton: false,
  });

  const avoidStudentIdBottomSheet = useBottomSheet({
    title: '학번',
    mainButtonText: '선택',
    mainButtonDisabled: !avoidStudentId,
    mainButtonCallback: () => {
      avoidDepartmentForm.setValue('avoidStudentId', avoidStudentId);
    },
    isSideButton: false,
  });

  const submitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
    data: any,
  ) => {
    event.preventDefault();
    await avoidDepartmentForm.handleSubmit(data);
    const submitter = (event.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement;
    const buttonColor = submitter.getAttribute('buttonColor');

    if (buttonColor === 'primary') {
      props.onNext({
        avoidDepartment: avoidDepartment,
        avoidStudentId: avoidStudentId,
      });
    } else {
      props.onNext({
        avoidDepartment: null,
        avoidStudentId: null,
      });
    }
  };

  return (
    <S.FormContainer
      className="layout-padding"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        submitHandler(event, avoidDepartmentForm.getValues())
      }
    >
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={4} />
        </S.IndicatorBox>
        <Text
          color={'Blue90'}
          typograph={'headlineMedium'}
          style={{
            fontWeight: 700,
            width: '100%',
            whiteSpace: 'pre-wrap',
            marginBottom: '8px',
          }}
        >
          {`피하고 싶은 상대가 있나요?\n쓱 빼드릴게요`}
        </Text>
        <Text
          color={'Blue70'}
          typograph={'bodyMediumMedium'}
          style={{ fontWeight: 500, width: '100%' }}
        >
          선택 학과의 선택 학번이 매칭 상대에서 제외돼요.
        </Text>
        <div style={{ marginTop: 40 }}>
          {avoidDepartmentMemo.map(({ title, type, inputs }) => {
            return (
              <S.BasicProfileFirstInputWrapper key={title}>
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
                        if (title === '학과') avoidDepartmentBottomSheet.open();
                        if (title === '학번') avoidStudentIdBottomSheet.open();
                      }}
                    />
                  ))}
              </S.BasicProfileFirstInputWrapper>
            );
          })}
        </div>
      </S.MainContainer>

      <S.ButtonWrapper>
        <Button buttonColor="secondary" type="submit" onClick={() => {}}>
          넘어가기
        </Button>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => {}}
          disabled={
            !(
              (avoidDepartmentForm.watch('avoidDepartment') ||
                props.context.avoidDepartment) &&
              (avoidDepartmentForm.watch('avoidStudentId') ||
                props.context.avoidStudentId)
            )
          }
        >
          다음
        </Button>
      </S.ButtonWrapper>
      <S.BottomSheet>
        {avoidDepartmentBottomSheet.render(
          <DepartmentPicker
            setDepartment={setAvoidDepartment}
            department={avoidDepartment}
          />,
        )}
        {avoidStudentIdBottomSheet.render(
          <Picker list={list} onSelectedChange={handleSelectedChange} />,
        )}
      </S.BottomSheet>
    </S.FormContainer>
  );
};
export default Fourth;
