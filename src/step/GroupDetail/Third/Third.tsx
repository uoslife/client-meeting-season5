import { ReactNode } from 'react';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Radio from '../../../components/common/Radio';

interface MoodFormType {
  mood: string;
}

const Third = (props: {
  context: Partial<FourthType>;
  onNext: ({ mood }: { mood: string }) => void;
}): ReactNode => {
  const {
    watch,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<MoodFormType>();

  const handleSubmit: SubmitHandler<MoodFormType> = (data) => {
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value === '' || errors.mood,
    );
    if (checkValues) return;
    props.onNext({ mood: data.mood });
  };

  return (
    <>
      <S.FormContainer
        className="layout-padding"
        onSubmit={handleSubmitWrapper(handleSubmit)}
      >
        <S.MainContainer>
          <S.IndicatorBox>
            <Indicator depth={3} currentLevel={3} />
          </S.IndicatorBox>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', whiteSpace: 'pre-wrap' }}
          >
            {`우리가 더 즐겁고 편안하게\n놀 수 있는 분위기는?`}
          </Text>
          <S.RadioWrapper>
            <Radio
              {...register('mood', { required: true })}
              label={'술 게임을 하면서 신나게 놀고 싶어요.'}
              value={'ACTIVE'}
            />
            <Radio
              {...register('mood', { required: true })}
              label={'차분하게 대화하고 싶어요.'}
              value={'CALM'}
            />
          </S.RadioWrapper>
        </S.MainContainer>

        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="submit"
            onClick={() => {}}
            disabled={!watch('mood')}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </>
  );
};
export default Third;
