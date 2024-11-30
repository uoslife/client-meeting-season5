import { useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import useBasicAxios from '../axios/useBasicAxios';
import { AxiosError } from 'axios';

type ReissueResponseType = {
  accessToken: string;
};

const useReissue = (): UseMutationResult<
  ReissueResponseType,
  AxiosError,
  void
> => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const { postFetcher } = useBasicAxios();

  return useMutation({
    mutationFn: () => postFetcher<ReissueResponseType>('/api/auth/reissue'),
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
    },
    onError: () => {
      setAccessToken('');
    },
  });
};

export { useReissue };
