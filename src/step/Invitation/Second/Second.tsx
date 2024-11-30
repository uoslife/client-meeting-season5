import S from './style';
import Button from '../../../components/common/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import Text from '../../../components/common/Text';
import useModal from '../../../hooks/useModal';
import { useEffect, useState } from 'react';
import {
  useGetLeaderNameByCode,
  useJoinMeetingTeam,
} from '../../../hooks/api/useMeetingGroupInfo';
import { useNavigate } from 'react-router-dom';

interface CodeType {
  code: string;
}

const Second = (props: { onNext: () => void }) => {
  const [teamLeaderName, setTeamLeaderName] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [code, setCode] = useState('');

  const {
    watch,
    register,
    handleSubmit: handleSubmitWrapper,
    formState: { errors },
  } = useForm<CodeType>();
  useEffect(() => {
    setCode(watch('code'));
  }, [watch('code')]);
  const navigate = useNavigate();
  const leaderNameQuery = useGetLeaderNameByCode({ code: code });

  useEffect(() => {
    if (leaderNameQuery.isSuccess)
      setTeamLeaderName(leaderNameQuery.data?.leaderName);
  }, [leaderNameQuery.isSuccess]);
  const joinMutation = useJoinMeetingTeam();

  const submitModal = useModal({
    //API 호출
    title: `${teamLeaderName}의 팅에 참여하시겠습니까?`,
    isSideButton: true,
    mainButtonText: '참여하기',
    sideButtonText: '취소',
    mainButtonCallback: () => {
      joinMutation.mutate(
        { code: code },
        {
          onSuccess: () => navigate('/auth/main'),
          onError: () => {
            alert('asdf');
          },
        },
      );
    },
  });

  const handleSubmit: SubmitHandler<CodeType> = async (data) => {
    //submit validation 필요
    const checkValues = Object.values(data).some(
      (value) =>
        value === undefined ||
        value === '' ||
        value.length !== 4 ||
        errors.code,
    );
    if (checkValues) return;
    const refetchResult = await leaderNameQuery.refetch();
    if (refetchResult?.data?.leaderName) {
      setTeamLeaderName(refetchResult.data.leaderName);
      submitModal.open();
    } else {
      alert('다시 시도해주세요');
    }
  };

  const isButtonDisabled = (): boolean => {
    if (watch('code')) return !(watch('code').length === 4);
    return true;
  };

  return (
    <S.FormContainer
      className="layout-padding"
      onSubmit={handleSubmitWrapper(handleSubmit)}
    >
      <S.MainContainer>
        <div
          style={{
            transform: 'translateY(-10%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
            입장할 팅의 코드를 입력해 주세요.
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
                  >
                    {watch('code') && watch('code')[i]}
                  </S.InputDisplay>
                );
              })}
            <S.Input
              value={watch('code')}
              {...register('code', {
                required: true,
                maxLength: 4,
                pattern: /^[A-Z0-9]*$/,
                setValueAs: (value) => {
                  const upperCaseValue = value.toUpperCase();
                  if (!/^[A-Za-z0-9]*$/.test(value))
                    return upperCaseValue.slice(0, upperCaseValue.length - 2);
                  if (upperCaseValue.length > 4)
                    return upperCaseValue.slice(0, 4);
                  return upperCaseValue;
                },
              })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </S.InputWrapper>
        </div>
      </S.MainContainer>
      {submitModal.render()}
      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => {}}
          disabled={isButtonDisabled()}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Second;
