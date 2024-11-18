import { SubmitHandler, useForm } from 'react-hook-form';

interface AvoidDepartmentPropsType {
  avoidDepartment: string;
  avoidStudentId: string;
}

const useAvoidDepartment = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<AvoidDepartmentPropsType>();

  const handleSubmit: SubmitHandler<AvoidDepartmentPropsType> = ({
    avoidDepartment,
    avoidStudentId,
  }) => {
    const data = { avoidDepartment, avoidStudentId };
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value === '',
    );
    if (checkValues) {
      alert('항목을 모두 채워주세요');
      return;
    }
  };

  return {
    control,
    watch,
    handleSubmit: handleSubmitWrapper(handleSubmit),
    setValue,
    getValues,
    avoidDepartment: {
      ...register('avoidDepartment', { required: true }),
    },
    avoidStudentId: {
      ...register('avoidStudentId', { required: true }),
    },
    errors,
  };
};

export default useAvoidDepartment;
