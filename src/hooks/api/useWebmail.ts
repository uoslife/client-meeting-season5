import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { errorHandler, postFetcher } from '../../utils/api';
import { useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { getBearerToken } from '../../utils/token';

const useSendEmail = () => {
  return useMutation({
    mutationFn: ({ email }: { email: string }) =>
      postFetcher(`/api/verification/send-email?email=${email}@uos.ac.kr`),
    onSuccess: (data) => data,
    onError: (error) => errorHandler(error),
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
  const setAccessToken = useSetAtom(accessTokenAtom);

  return useMutation<VerifyEmailResponse, Error, VerifyEmailVariables>({
    mutationFn: ({ email, code }) =>
      postFetcher(`/api/verification/verify-email`, {
        email: email + '@uos.ac.kr',
        code: code,
      }),
    onSuccess: (data) => {
      console.log('서버콜백');
      const accessToken = data.accessToken;
      setAccessToken(getBearerToken(accessToken));
    },
    onError: (error) => errorHandler(error),
  });
};

export { useSendEmail, useVerifyEmail };
