import { SubmitHandler, useForm } from 'react-hook-form';

export interface DepartmentFormPropsType {
  department: string;
  studentId: string;
}

const useDepartmentForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<DepartmentFormPropsType>();

  const handleSubmit: SubmitHandler<DepartmentFormPropsType> = ({
    department,
    studentId,
  }) => {
    const data = { department, studentId };
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value === '',
    );
    if (checkValues) {
      alert('항목을 모두 채워주세요.');
      return;
    }
  };
  return {
    control,
    watch,
    handleSubmit: handleSubmitWrapper(handleSubmit),
    setValue,
    getValues,
    department: {
      ...register('department', { required: true }),
    },
    studentId: {
      ...register('studentId', { required: true }),
    },
    errors,
  };
};

export default useDepartmentForm;
