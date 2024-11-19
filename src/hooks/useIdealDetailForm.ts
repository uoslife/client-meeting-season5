import { SubmitHandler, useForm } from 'react-hook-form';
interface useIdealDetailFormPropsType {
  counterAge: string;
  counterMbti: string;
  counterHeight: string;
  counterAppearanceType: string;
  counterSmoking: string;
}

const useIdealDetailForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<useIdealDetailFormPropsType>();

  const handleSubmit: SubmitHandler<useIdealDetailFormPropsType> = ({
    counterAge,
    counterMbti,
    counterHeight,
    counterAppearanceType,
    counterSmoking,
  }) => {
    const data = {
      counterAge,
      counterMbti,
      counterHeight,
      counterAppearanceType,
      counterSmoking,
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
    counterAge: {
      ...register('counterAge', { required: true }),
    },
    counterMbti: {
      ...register('counterMbti', { required: true }),
    },
    counterHeight: {
      ...register('counterHeight', { required: true }),
    },
    counterAppearanceType: {
      ...register('counterAppearanceType', { required: true }),
    },
    counterSmoking: {
      ...register('counterSmoking', {
        required: true,
      }),
    },
    errors,
  };
};

export default useIdealDetailForm;
