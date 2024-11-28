import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import useAuthAxios from '../axios/useAuthAxios';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { errorHandler } from '../../utils/api';

interface CreateMeetingTeamResponse {
  code: string;
}

export const useGetMeetingPersonalInfo = (): UseQueryResult<void, Error> => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['meetingTeamInfo', 'SINGLE'],
    queryFn: () => getFetcher<void>(`api/meeting/SINGLE/application/info`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: !!accessToken,
  });
};

export const useCreateMeetingTeam = (): UseMutationResult<
  CreateMeetingTeamResponse,
  Error,
  void
> => {
  const { postFetcher } = useAuthAxios();
  return useMutation<CreateMeetingTeamResponse, Error, void>({
    mutationFn: () => postFetcher(`/api/meeting/SINGLE/create`),
    onSuccess: (data) => {
      console.log(data.code);
    },
    onError: (error) => errorHandler(error),
  });
};
