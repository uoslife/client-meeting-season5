import { SubmitHandler, useForm } from 'react-hook-form';

export interface LoginFormPropsType {
  name: string;
  gender: string;
  genderReadOnly: string;
  age: string;
  phoneNumber: string;
  kakaoID: string;
}

const useProfileForm = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<LoginFormPropsType>();

  const handleSubmit: SubmitHandler<LoginFormPropsType> = ({
    name,
    gender,
    age,
    phoneNumber,
    kakaoID,
  }) => {
    const data = { name, gender, age, phoneNumber, kakaoID };
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
    name: {
      ...register('name', { required: true }),
    },
    genderReadOnly: {
      ...register('genderReadOnly', { required: true }),
    },
    gender: {
      ...register('gender', { required: true }),
    },
    age: {
      ...register('age', {
        required: true,
      }),
    },
    phoneNumber: {
      ...register('phoneNumber', {
        required: true,
        pattern: {
          value: /^01[0-9]\d{3,4}\d{4}$/,
          message: '전화번호 형식이 아닙니다.',
        },
      }),
    },

    kakaoID: {
      ...register('kakaoID', { required: true }),
    },
    errors,
  };
};

export default useProfileForm;
