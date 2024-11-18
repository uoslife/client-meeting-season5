import { ReactNode, useMemo, useState } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import usePrefer from '../../../hooks/usePrefer';
const Third = (props: {
  context: OptionalProfileType;
  onNext: ({ prefer }: Pick<OptionalProfileType, 'prefer'>) => void;
}): ReactNode => {
  const preferForm = usePrefer();
  const preferMemo = useMemo(() => {
    const { prefer } = preferForm;
    return [
      {
        title: '나이',
        description: (props.context && String(props.context.targetAge)) ?? '-',
        input: prefer,
      },
      {
        title: '키',
        description:
          (props.context && String(props.context.targetHeight)) ?? '-',
        input: prefer,
      },
      {
        title: 'MBTI',
        description: (props.context && String(props.context.targetMbti)) ?? '-',
        input: prefer,
      },
      {
        title: '외모',
        description:
          (props.context && String(props.context.targetAppearanceType)) ?? '-',
        input: prefer,
      },
      {
        title: '흡연 여부',
        description:
          (props.context && String(props.context.targetSmoking)) ?? '_',
        input: prefer,
      },
    ];
  }, [preferForm]);

  const submitHandler = async () => {
    if (preferForm.getValues()) props.onNext({ prefer: 'age' });
  };

  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={3} />
        </S.IndicatorBox>
        <Text
          color={'Blue90'}
          typograph={'headlineMedium'}
          style={{ fontWeight: 700, width: '100%', whiteSpace: 'pre-wrap' }}
        >
          {`당신의 이상형 체크리스트,\n최우선 항목은?`}
        </Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 20,
            gap: 12,
          }}
        >
          {preferMemo.map(({ title, description, input }) => {
            return (
              <div key={title}>
                <S.Input {...input} type="radio" id={title} />
                <S.RadioWrapper htmlFor={title}>
                  <div className="unchecked">
                    <Text color={'Blue40'} typograph={'bodyMediumSemiBold'}>
                      {title}
                    </Text>
                    <Text color={'Blue90'} typograph={'bodyLargeMedium'}>
                      {description}
                    </Text>
                  </div>
                </S.RadioWrapper>
              </div>
            );
          })}
        </div>
      </S.MainContainer>

      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => {}}
          disabled={!preferForm.watch('prefer')}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Third;
