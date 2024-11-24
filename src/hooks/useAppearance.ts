import { SubmitHandler, useForm } from 'react-hook-form';
interface useAppearanceFormPropsType {
  eyelid: string[];
  face: string[];
}

const useAppearanceForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<useAppearanceFormPropsType>();

  const handleSubmit: SubmitHandler<useAppearanceFormPropsType> = ({
    eyelid,
    face,
  }) => {
    const data = {
      eyelid,
      face,
    };
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value.length === 0,
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
    eyelid: {
      ...register('eyelid', {
        required: true,
      }),
    },
    face: {
      ...register('face', {
        required: true,
      }),
    },
    errors,
  };
};

export default useAppearanceForm;
