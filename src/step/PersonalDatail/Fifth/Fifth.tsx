import { ReactNode, useMemo } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import useDateCourse from '../../../hooks/useDateCourse';
import BasicInput from '../../../components/common/BasicInput';
import { COLORS } from '../../../lib/constants';
const Fifth = (props: {
  context: OptionalProfileType;
  onNext: ({ course }: Pick<OptionalProfileType, 'course'>) => void;
}): ReactNode => {
  const dateCourseForm = useDateCourse();

  const dateCourseMemo = useMemo(() => {
    const { course, errors } = dateCourseForm;
    return [
      {
        title: '나는 상대방과 크리스마스에',
        type: 'text',
        inputs: [
          {
            ...course,
            placeholder: '이런 데이트 코스를',
            defaultValue: props.context.course,
          },
        ],
        error: errors.course?.message,
      },
    ];
  }, [dateCourseForm]);

  const submitHandler = async () => {
    await dateCourseForm.handleSubmit();
    props.onNext({
      course: dateCourseForm.getValues().course,
    });
  };

  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={5} />
        </S.IndicatorBox>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%' }}
        >
          미리 짜보는 데이트 코스
        </Text>
        <S.TextContainer></S.TextContainer>
        {dateCourseMemo.map(({ title, inputs }) => {
          return (
            <S.BasicProfileFirstInputWrapper key={title}>
              <Text
                typograph={'titleSmall'}
                color={'Blue90'}
                style={{ fontWeight: 600 }}
              >
                {title}
              </Text>
              {inputs.map((input) => (
                <BasicInput
                  key={input.name}
                  {...input}
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 500,
                    lineHeight: '2.4rem',
                    color: COLORS.Red60,
                  }}
                />
              ))}
            </S.BasicProfileFirstInputWrapper>
          );
        })}
        <Text
          typograph={'titleSmall'}
          color={'Blue90'}
          style={{ fontWeight: 600 }}
        >
          함께 하고 싶어요.
        </Text>
        <Text
          typograph={'bodyMediumMedium'}
          color={'Blue70'}
          style={{ whiteSpace: 'pre-wrap', marginTop: 40 }}
        >
          {`예) 크리스마스 트리 앞에서 사진 찍기, \n크리스마스 컨셉 방탈출 게임`}
        </Text>
      </S.MainContainer>

      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => {}}
          disabled={!(dateCourseForm.watch('course') || props.context.course)}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Fifth;
