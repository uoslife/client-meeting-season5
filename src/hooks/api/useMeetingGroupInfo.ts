import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';
import useAuthAxios from '../axios/useAuthAxios';
import { errorHandler } from '../../utils/api';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';

interface CreateMeetingTeamResponse {
  code: string;
}

export const useCreateMeetingTeam = (): UseMutationResult<
  CreateMeetingTeamResponse,
  Error,
  void
> => {
  const { postFetcher } = useAuthAxios();
  return useMutation<CreateMeetingTeamResponse, Error, void>({
    mutationFn: () => postFetcher(`/api/meeting/group/create`),
    onSuccess: (data) => {
      console.log(data.code);
    },
    onError: (error) => errorHandler(error),
  });
};

export const useJoinMeetingTeam = (): UseMutationResult<
  void,
  Error,
  { code: string }
> => {
  const { postFetcher } = useAuthAxios();
  return useMutation<void, Error, { code: string }>({
    mutationFn: ({ code }) => postFetcher(`/api/meeting/TRIPLE/join/${code}`),
    onSuccess: () => {},
    onError: () => {},
  });
};

export const useGetMeetingGroupInfo = () => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['getMeetingUserList'],
    queryFn: () => getFetcher<undefined>(`api/meeting/TRIPLE/application/info`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: !!accessToken,
  });
};

export const useGetMeetingGroupInfoWhile = () => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['getMeetingUserList'],
    queryFn: () => getFetcher<undefined>(`api/meeting/TRIPLE/application/info`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: !!accessToken,
  });
};
