import { SubmitHandler, useForm } from 'react-hook-form';

export interface UseInterestFormPropsType {
  interests: string;
}

const useInterestForm = () => {
  const {
    control,
    register,
    setValue,
    watch,
    handleSubmit: handleSubmitWrapper,
  } = useForm<UseInterestFormPropsType>();

  const handleSubmit: SubmitHandler<UseInterestFormPropsType> = ({
    interests,
  }) => {
    const data = { interests };
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
    setValue,
    handleSubmit: handleSubmitWrapper(handleSubmit),
    interests: {
      ...register('interests', { required: true }),
    },
  };
};

export default useInterestForm;
