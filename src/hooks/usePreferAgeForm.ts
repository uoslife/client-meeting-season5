import { SubmitHandler, useForm } from 'react-hook-form';
interface usePreferAgeFormPropsType {
  age: string;
}

const usePreferAgeForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<usePreferAgeFormPropsType>();

  const handleSubmit: SubmitHandler<usePreferAgeFormPropsType> = ({ age }) => {
    const data = {
      age,
    };
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
    age: {
      ...register('age', {
        required: true,
      }),
    },

    errors,
  };
};

export default usePreferAgeForm;
