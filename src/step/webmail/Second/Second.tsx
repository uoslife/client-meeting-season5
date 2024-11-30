import { ReactNode, useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import refresh from '../../../lib/assets/icon/refresh.svg';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';
import { useSendEmail, useVerifyEmail } from '../../../hooks/api/useWebmail';
import { isAxiosError } from 'axios';

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
  const verifyEmailMutation = useVerifyEmail();
  const sendEmailMutation = useSendEmail();

  const [timeLeft, setTimeLeft] = useState(600);
  const [errorText, setErrorText] = useState('');
  const [errorTimeText, setErrorTimeText] = useState('');
  const [exceedErrorText, setExceedErrorText] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setErrorText('');
      setExceedErrorText('');
      setErrorTimeText('인증 시간이 만료되었습니다.');

      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleSubmit: SubmitHandler<CodeType> = (data) => {
    const checkValues = Object.values(data).some(
      (value) =>
        value === undefined ||
        value === '' ||
        value.length !== 4 ||
        errors.code,
    );
    if (checkValues) return;
    if (exceedErrorText) return;

    verifyEmailMutation.mutate(
      { email: props.webmail, code: data.code },
      {
        onSuccess: ({ accessToken }: { accessToken: string }) => {
          props.onNext(accessToken);
        },
        onError: (error) => {
          if (isAxiosError(error)) {
            if (error.status === 429) {
              setTimeLeft(0);
              setExceedErrorText('일일 인증 횟수를 초과했습니다. (5/5)');
              setErrorText('');
              setErrorTimeText('');
            }
          }
          setErrorText('인증 코드가 일치하지 않습니다.');
          setErrorTimeText('');
          setExceedErrorText('');
        },
      },
    );
  };

  const isButtonDisabled = (): boolean => {
    if (watch('code')) return !(watch('code').length === 4);
    return true;
  };

  // 5번 이상 재전송
  const handleResendCode = () => {
    sendEmailMutation.mutate(
      { email: props.webmail },
      {
        onSuccess: () => {
          reset({ code: '' });
          setExceedErrorText('');
          setErrorText('');
          setErrorTimeText('');
          setTimeLeft(600);
        },
        onError: () => {
          setExceedErrorText('일일 인증 횟수를 초과했습니다. (5/5)');
          setTimeLeft(0);
          setErrorText('');
          setErrorTimeText('');
        },
      },
    );
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
                인증 코드를 입력해 주세요.
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
              {formatTime(timeLeft)}
            </Text>

            <S.InputWrapper>
              {Array(4)
                .fill(0)
                .map((_, i) => {
                  return (
                    <S.InputDisplay
                      key={i}
                      isFocused={Boolean(
                        (watch('code') && watch('code').length === i) ||
                          (isFocused && i == 0 && !watch('code')),
                      )}
                      isError={!!errorText || !!exceedErrorText}
                    >
                      {watch('code') && watch('code')[i]}
                    </S.InputDisplay>
                  );
                })}
              <S.Input
                value={watch('code')}
                type="number"
                pattern="\d*"
                {...register('code', {
                  required: true,
                  max: 9999,
                  min: 0,
                  setValueAs: (value) => {
                    if (value === '-') return '';
                    if (parseInt(value) > 9999) return value.slice(0, 4);
                    if (parseInt(value) < 0 || parseInt(value) > 9999)
                      return '';
                    if (value.length > 4) return value.slice(0, 4);
                    return value;
                  },
                })}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </S.InputWrapper>
            <div
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={handleResendCode}
            >
              <Text color={'Blue70'} typograph={'bodyMediumSemiBold'}>
                코드 재전송
              </Text>
              <img src={refresh} alt="refresh" width={18} height={18} />
            </div>
            {String(watch('code')).length === 4 && (
              <Text color={'ErrorLight'} typograph={'titleMedium'}>
                {errorText}
              </Text>
            )}
            {exceedErrorText && (
              <Text color={'ErrorLight'} typograph={'titleMedium'}>
                {exceedErrorText}
              </Text>
            )}
            {errorTimeText && (
              <Text color={'ErrorLight'} typograph={'titleMedium'}>
                {errorTimeText}
              </Text>
            )}
          </S.CodeWrapper>
        </div>

        <Button
          type="submit"
          buttonColor={'primary'}
          disabled={
            isButtonDisabled() ||
            !timeLeft ||
            !!exceedErrorText ||
            !!errorTimeText
          }
          onClick={() => {}}
        >
          다음
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default Second;
