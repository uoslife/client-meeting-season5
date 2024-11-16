import { ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import refresh from '../../../lib/assets/icon/refresh.svg';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';

type CodeType = {
  code: string;
};

const Second = (props: {
  webmail: string;
  onNext: (code: string) => void;
}): ReactNode => {
  const {
    watch,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
    reset,
  } = useForm<CodeType>();

  const handleSubmit: SubmitHandler<CodeType> = (data) => {
    const checkValues = Object.values(data).some(
      (value) =>
        value === undefined ||
        value === '' ||
        value.length !== 4 ||
        errors.code,
    );
    if (checkValues) return;
    props.onNext(data.code);
  };

  const isButtonDisabled = (): boolean => {
    if (watch('code')) return !(watch('code').length === 4);
    return true;
  };

  return (
    <S.Wrapper>
      <S.Form
        onSubmit={handleSubmitWrapper(handleSubmit)}
        className="layout-padding"
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '4.2rem' }}
        >
          <S.TextWrapper>
            <div>
              <Text color={'Blue90'} typograph={'headlineMedium'}>
                웹메일로 전송된
              </Text>
              <Text color={'Blue90'} typograph={'headlineMedium'}>
                인증 코드를 입력해주세요.
              </Text>
            </div>
            <Text color={'Blue70'} typograph={'bodyMediumMedium'}>
              일일 인증 코드 전송 및 인증 횟수는 5회로 제한됩니다.
            </Text>
          </S.TextWrapper>
          <S.CodeWrapper>
            <Text color={'Blue70'} typograph={'bodyMediumSemiBold'}>
              인증코드
            </Text>
            <Text color={'Blue70'} typograph={'titleMedium'}>
              3:00
            </Text>
            <S.InputWrapper>
              {Array(4)
                .fill(0)
                .map((_, i) => {
                  return (
                    <S.InputDisplay key={i}>
                      {watch('code') && watch('code')[i]}
                    </S.InputDisplay>
                  );
                })}
              <S.Input
                value={watch('code')}
                type="number"
                {...register('code', {
                  required: true,
                  max: 9999,
                  setValueAs: (value) => {
                    if (value.length > 4) return value.slice(0, 4);
                    return value;
                  },
                })}
              />
            </S.InputWrapper>
            <div
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={() => {
                reset({ code: '' });
              }}
            >
              <Text color={'Blue70'} typograph={'bodyMediumSemiBold'}>
                코드 재전송
              </Text>
              <img src={refresh} alt="refresh" width={18} height={18} />
            </div>
          </S.CodeWrapper>
        </div>

        <Button
          type="submit"
          buttonColor={'primary'}
          disabled={isButtonDisabled()}
          onClick={() => {}}
        >
          다음
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
export default Second;
