import { SubmitHandler, useForm } from 'react-hook-form';
interface usePersonalDetailFormPropsType {
  myMbti: string;
  myHeight: string;
  myAppearanceType: string;
  mySmoking: string;
  mbtiFirst: string;
  mbtiSecond: string;
  mbtiThird: string;
  mbtiFourth: string;
}

const usePersonalDetailForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<usePersonalDetailFormPropsType>();

  const handleSubmit: SubmitHandler<usePersonalDetailFormPropsType> = ({
    myMbti,
    myHeight,
    myAppearanceType,
    mySmoking,
    mbtiFirst,
    mbtiSecond,
    mbtiThird,
    mbtiFourth,
  }) => {
    const data = {
      myMbti,
      myHeight,
      myAppearanceType,
      mySmoking,
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
    console.log(data);
  };
  return {
    control,
    watch,
    handleSubmit: handleSubmitWrapper(handleSubmit),
    setValue,
    getValues,
    myMbti: {
      ...register('myMbti', { required: true }),
    },
    myHeight: {
      ...register('myHeight', { required: true }),
    },
    myAppearanceType: {
      ...register('myAppearanceType', { required: true }),
    },
    mySmoking: {
      ...register('mySmoking', {
        required: true,
      }),
    },
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

export default usePersonalDetailForm;
