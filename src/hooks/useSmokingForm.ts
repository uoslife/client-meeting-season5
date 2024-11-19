import { SubmitHandler, useForm } from 'react-hook-form';
interface useSmokingFormPropsType {
  cigarette: string;
  vape: string;
  noSmoking: string;
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
    vape,
    noSmoking,
  }) => {
    const data = {
      cigarette,
      vape,
      noSmoking,
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
    cigarette: {
      ...register('cigarette', {
        required: true,
      }),
    },
    vape: {
      ...register('vape', {
        required: true,
      }),
    },
    noSmoking: {
      ...register('noSmoking', {
        required: true,
      }),
    },
    errors,
  };
};

export default useSmokingForm;
