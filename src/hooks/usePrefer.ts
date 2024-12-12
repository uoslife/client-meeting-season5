import { SubmitHandler, useForm } from 'react-hook-form';

export interface PreferFormPropsType {
  prefer: string;
}

const usePrefer = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<PreferFormPropsType>();

  const handleSubmit: SubmitHandler<PreferFormPropsType> = ({ prefer }) => {
    const data = { prefer };
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
    prefer: {
      ...register('prefer', { required: true }),
    },
    errors,
  };
};

export default usePrefer;
