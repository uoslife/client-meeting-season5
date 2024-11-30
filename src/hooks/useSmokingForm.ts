import { SubmitHandler, useForm } from 'react-hook-form';
interface useSmokingFormPropsType {
  cigarette: string;
}

const useSmokingForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<useSmokingFormPropsType>();

  const handleSubmit: SubmitHandler<useSmokingFormPropsType> = ({
    cigarette,
  }) => {
    const data = {
      cigarette,
    };
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value.length === 0,
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
    cigarette: {
      ...register('cigarette', {
        required: true,
      }),
    },
    errors,
  };
};

export default useSmokingForm;
