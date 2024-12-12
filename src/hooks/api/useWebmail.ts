import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { errorHandler } from '../../utils/api';
import useBasicAxios from '../axios/useBasicAxios';

const useSendEmail = (): UseMutationResult<
  void, // 데이터 타입을 알면 구체적으로 명시
  Error,
  { email: string }
> => {
  const { postFetcher } = useBasicAxios();

  return useMutation<void, Error, { email: string }>({
    mutationFn: ({ email }) =>
      postFetcher(`/api/verification/send-email?email=${email}@uos.ac.kr`),
    onSuccess: (data) => data,
    onError: errorHandler,
  });
};
interface VerifyEmailVariables {
  email: string;
  code: string;
}

interface VerifyEmailResponse {
  accessToken: string;
}

const useVerifyEmail = (): UseMutationResult<
  VerifyEmailResponse,
  Error,
  VerifyEmailVariables
> => {
  const { postFetcher } = useBasicAxios();
  return useMutation<VerifyEmailResponse, Error, VerifyEmailVariables>({
    mutationFn: ({ email, code }) =>
      postFetcher(`/api/verification/verify-email`, {
        email: email + '@uos.ac.kr',
        code: code,
      }),
  });
};

export { useSendEmail, useVerifyEmail };
