import { SubmitHandler, useForm } from 'react-hook-form';
interface useMbtiFormPropsType {
  mbtiFirst: string;
  mbtiSecond: string;
  mbtiThird: string;
  mbtiFourth: string;
}

const useMbtiForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<useMbtiFormPropsType>();

  const handleSubmit: SubmitHandler<useMbtiFormPropsType> = ({
    mbtiFirst,
    mbtiSecond,
    mbtiThird,
    mbtiFourth,
  }) => {
    const data = {
      mbtiFirst,
      mbtiSecond,
      mbtiThird,
      mbtiFourth,
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
    mbtiFirst: {
      ...register('mbtiFirst', {
        required: true,
      }),
    },
    mbtiSecond: {
      ...register('mbtiSecond', {
        required: true,
      }),
    },
    mbtiThird: {
      ...register('mbtiThird', {
        required: true,
      }),
    },
    mbtiFourth: {
      ...register('mbtiFourth', {
        required: true,
      }),
    },
    errors,
  };
};

export default useMbtiForm;
