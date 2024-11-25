import Indicator from '../../common/Indicator';
import Text from '../../common/Text';
import Button from '../../common/Button';
import useDepartmentForm from '../../../hooks/useDepartmentForm';
import BasicInput from '../../common/BasicInput';
import { useMemo, useState } from 'react';
import useBottomSheet from '../../../hooks/useBottomSheet';
import Picker from '../../common/Picker';
import DepartmentPicker from '../DepartmentPicker';
import { OptionalProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';
import S from './style';

const SecondDepartmentPage = (props: {
  onNext: ({
    department,
    studentId,
  }: Pick<OptionalProfileType, 'department' | 'studentId'>) => void;
}) => {
  const [department, setDepartment] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');
  const list = Array.from({ length: 15 }, (_, index) => String(2010 + index));

  const handleSelectedChange = (value: string) => {
    setStudentId(value);
  };

  const departmentForm = useDepartmentForm();
  const departmentMemo = useMemo(() => {
    const { department, studentId } = departmentForm;
    return [
      {
        title: '학과',
        type: 'readOnly',
        inputs: [
          {
            ...department,
            placeholder: '학과를 선택해주세요.',
          },
        ],
      },
      {
        title: '학번',
        type: 'readOnly',
        inputs: [
          {
            ...studentId,
            placeholder: '입학년도를 선택해 주세요.',
          },
        ],
      },
    ];
  }, [departmentForm]);

  const departmentBottomSheet = useBottomSheet({
    title: '학과',
    mainButtonText: '선택',
    mainButtonDisabled: !department,
    mainButtonCallback: () => {
      departmentForm.setValue('department', department);
    },
    isSideButton: false,
  });

  const studentIdBottomSheet = useBottomSheet({
    title: '학번',
    mainButtonText: '선택',
    mainButtonDisabled: !studentId,
    mainButtonCallback: () => {
      departmentForm.setValue('studentId', studentId);
    },
    isSideButton: false,
  });

  return (
    <S.Wrapper className="layout-padding">
      <S.Container>
        <S.IndicatorBox>
          <Indicator depth={3} currentLevel={2} />
        </S.IndicatorBox>
        <Text
          color={'Blue90'}
          typograph={'headlineMedium'}
          style={{ fontWeight: 700, width: '100%' }}
        >
          어떤 공부를 하고 계신가요?
        </Text>
        <div style={{ marginTop: 40 }}>
          {departmentMemo.map(({ title, type, inputs }) => {
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
                        if (title === '학과') departmentBottomSheet.open();
                        if (title === '학번') studentIdBottomSheet.open();
                      }}
                    />
                  ))}
              </S.BasicProfileFirstInputWrapper>
            );
          })}
        </div>
      </S.Container>
      <S.ButtonContainer>
        <Button
          type="submit"
          buttonColor={'primary'}
          disabled={
            !(
              departmentForm.getValues('department') &&
              departmentForm.getValues('studentId')
            )
          }
          onClick={() => {
            props.onNext({ department: department, studentId: studentId });
          }}
        >
          다음
        </Button>
      </S.ButtonContainer>
      <S.BottomSheet>
        {departmentBottomSheet.render(
          <DepartmentPicker
            setDepartment={setDepartment}
            department={department}
          />,
        )}
        {studentIdBottomSheet.render(
          <Picker list={list} onSelectedChange={handleSelectedChange} />,
        )}
      </S.BottomSheet>
    </S.Wrapper>
  );
};

export default SecondDepartmentPage;
