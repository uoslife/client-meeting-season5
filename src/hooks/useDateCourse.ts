import { SubmitHandler, useForm } from 'react-hook-form';

export interface DateCourseFormPropsType {
  course: string;
}

const useDateCourse = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<DateCourseFormPropsType>();

  const handleSubmit: SubmitHandler<DateCourseFormPropsType> = ({ course }) => {
    const data = { course };
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value === '',
    );

    if (checkValues) {
      alert('항목을 모두 채워주세요');
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
    course: {
      ...register('course', { required: true }),
    },
    errors,
  };
};

export default useDateCourse;
