import { SubmitHandler, useForm } from 'react-hook-form';
interface useCreateInterestFormPropsType {
  customInterest: string;
}

const useCreateInterestForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<useCreateInterestFormPropsType>();

  const handleSubmit: SubmitHandler<useCreateInterestFormPropsType> = ({
    customInterest,
  }) => {
    const data = {
      customInterest,
    };
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value === '',
    );

    if (checkValues) {
      alert('항목을 모두 채워주세요.');
      return;
    }
    console.log(data);
  };
  return {
    control,
    watch,
    handleSubmit: handleSubmitWrapper(handleSubmit),
    setValue,
    getValues,
    customInterest: {
      ...register('customInterest', {
        required: true,
        maxLength: 10,
      }),
    },
    errors,
  };
};

export default useCreateInterestForm;
