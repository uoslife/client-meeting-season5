import { SubmitHandler, useForm } from 'react-hook-form';

export interface UsagePolicyFormPropsType {
  check1: string;
  check2: string;
  check3: string;
}

const useUsagePolicyForm = () => {
  const {
    control,
    register,
    watch,
    handleSubmit: handleSubmitWrapper,
  } = useForm<UsagePolicyFormPropsType>();

  const handleSubmit: SubmitHandler<UsagePolicyFormPropsType> = ({
    check1,
    check2,
    check3,
  }) => {
    const data = { check1, check2, check3 };
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
    check1: {
      ...register('check1', { required: true }),
    },
    check2: {
      ...register('check2', { required: true }),
    },
    check3: {
      ...register('check3', { required: true }),
    },
  };
};

export default useUsagePolicyForm;
