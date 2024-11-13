import { SubmitHandler, useForm } from 'react-hook-form';

export interface LoginFormPropsType {
  name: string;
  gender: string;
  age: string;
  phoneNumber: string;
  kakaoID: string;
}

const useLoginForm = () => {
  const {
    control,
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
    console.log('asdf');
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
    handleSubmit: handleSubmitWrapper(handleSubmit),
    name: {
      ...register('name', { required: true }),
    },
    gender: {
      ...register('gender', { required: true }),
    },
    age: {
      ...register('age', { required: true }),
    },
    phoneNumber: {
      ...register('phoneNumber', { required: true }),
    },

    kakaoID: {
      ...register('kakaoID', { required: true }),
    },
    errors,
  };
};

export default useLoginForm;
