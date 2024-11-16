import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { COLORS } from '../../../lib/constants';
import { useForm } from 'react-hook-form';
import Text from '../../../components/common/Text';
import Button from '../../../components/common/Button';
import close from '../../../lib/assets/icon/close.svg';
import S from './style';

type WebmailType = {
  webmail: string;
};

const First = (props: { onNext: (email: string) => void }): ReactNode => {
  const {
    watch,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
    reset,
  } = useForm<WebmailType>();

  const handleSubmit: SubmitHandler<WebmailType> = (data) => {
    console.log(data);
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value === '' || errors.webmail,
    );
    if (checkValues) return;

    props.onNext(data.webmail);
  };

  return (
    <S.Wrapper>
      <S.Form
        onSubmit={handleSubmitWrapper(handleSubmit)}
        className="layout-padding"
      >
        <div>
          <S.TextWrapper>
            <div>
              <Text color={'Blue90'} typograph={'headlineMedium'}>
                서울 시립대학교 웹메일을
              </Text>
              <Text color={'Blue90'} typograph={'headlineMedium'}>
                입력해주세요.
              </Text>
            </div>
            <Text color={'Blue70'} typograph={'bodyMediumMedium'}>
              일일 인증 코드 전송 및 인증 횟수는 5회로 제한됩니다.
            </Text>
          </S.TextWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: `1px solid ${COLORS.Blue20}`,
            }}
          >
            <S.WebmailInput
              placeholder="안내텍스트"
              {...register('webmail', { required: true })}
            />
            <S.UOSAdress>
              {watch('webmail') && (
                <img
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  onClick={() => {
                    reset({ webmail: '' });
                  }}
                />
              )}
              <Text color={'Blue50'} typograph={'titleSmall'}>
                @uos.ac.kr
              </Text>
            </S.UOSAdress>
          </div>
        </div>

        <Button
          type="submit"
          buttonColor={'primary'}
          disabled={!watch('webmail')}
          onClick={() => {}}
        >
          다음
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
export default First;
