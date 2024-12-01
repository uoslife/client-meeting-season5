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
import { MeetingTeamType } from '../../lib/types/meeting';

interface CreateMeetingTeamResponse {
  code: string;
}

export const useDeleteMeetingPersonal = (): UseMutationResult<
  void,
  Error,
  void
> => {
  const { deleteFetcher } = useAuthAxios();
  return useMutation<void, Error, void>({
    mutationFn: () => deleteFetcher('/api/meeting/SINGLE'),
  });
};

export const useGetMeetingPersonalInfo = (): UseQueryResult<
  MeetingTeamType,
  Error
> => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['meetingTeamInfo', 'SINGLE'],
    queryFn: () =>
      getFetcher<MeetingTeamType>(`api/meeting/SINGLE/info?status=COMPLETED`),
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
  });
};
