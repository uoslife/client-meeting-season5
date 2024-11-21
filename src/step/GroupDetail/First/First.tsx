import { ReactNode } from 'react';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import close from '../../../lib/assets/icon/close.svg';
import { COLORS } from '../../../lib/constants';

interface NameFormType {
  name: string;
}

const First = (props: {
  context: Partial<FourthType>;
  onNext: ({ name }: { name: string }) => void;
}): ReactNode => {
  const {
    watch,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
    reset,
  } = useForm<NameFormType>();

  const handleSubmit: SubmitHandler<NameFormType> = (data) => {
    const checkValues = Object.values(data).some(
      (value) => value === undefined || value === '' || errors.name,
    );
    if (checkValues) return;
    props.onNext({ name: data.name });
  };

  return (
    <>
      <S.FormContainer
        className="layout-padding"
        onSubmit={handleSubmitWrapper(handleSubmit)}
      >
        <S.MainContainer>
          <S.IndicatorBox>
            <Indicator depth={3} currentLevel={1} />
          </S.IndicatorBox>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', whiteSpace: 'pre-wrap' }}
          >
            {`우리 팅 이름을 지어주세요!`}
          </Text>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ marginTop: 8 }}
          >
            단, 욕설 또는 불쾌감을 일으키는 이름은 자제해 주세요.
          </Text>

          <div
            style={{
              marginTop: 72,
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: `1px solid ${COLORS.Blue20}`,
            }}
          >
            <S.Input
              placeholder="예) 건공이사랑, 시대생짱"
              {...register('name', { required: true })}
            />
            <S.DeleteWrapper>
              {watch('name') && (
                <img
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  onClick={() => {
                    reset({ name: '' });
                  }}
                />
              )}
            </S.DeleteWrapper>
          </div>
        </S.MainContainer>

        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="submit"
            onClick={() => {}}
            disabled={!watch('name')}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </>
  );
};
export default First;
