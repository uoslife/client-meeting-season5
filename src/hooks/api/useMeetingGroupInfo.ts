import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';
import useAuthAxios from '../axios/useAuthAxios';
import { errorHandler } from '../../utils/api';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { UserInfoType } from '../../lib/types/meeting';

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
    mutationFn: () => postFetcher(`/api/meeting/TRIPLE/create`),

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

export const usePostGroupMeetingInfo = (): UseMutationResult<
  void,
  Error,
  { ageMin: number; ageMax: number; mood: string; name: string }
> => {
  const { postFetcher } = useAuthAxios();
  return useMutation<
    void,
    Error,
    { ageMin: number; ageMax: number; mood: string; name: string }
  >({
    mutationFn: ({ ageMax, ageMin, mood, name }) =>
      postFetcher(`/api/meeting/TRIPLE/info`, { ageMax, ageMin, mood, name }),
    onSuccess: () => {},
    onError: () => {},
  });
};

export const useGetFinalMeetingGroupInfo = () => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['meetingTeamInfo', 'TRIPLE'],
    queryFn: () =>
      getFetcher<{
        teamName: string;
        code: string;
        meetingTeamUserProfiles: UserInfoType[];
        preference: { ageMin: string; ageMax: string; mood: string };
      }>(`api/meeting/TRIPLE/info?status=COMPLETED`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: 2,
    enabled: !!accessToken,
  });
};
export const useGetMeetingGroupInfo = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const { getFetcher } = useAuthAxios();
  return useQuery({
    queryKey: ['meetingTeamInfo', 'TRIPLE'],
    queryFn: () =>
      getFetcher<{ code: string; meetingTeamUserProfiles: UserInfoType[] }>(
        `api/meeting/TRIPLE/info?status=UNCOMPLETED`,
      ),
    select: (data: { code: string; meetingTeamUserProfiles: UserInfoType[] }) =>
      data,
    enabled: !!accessToken,
  });
};

export const useGetLeaderNameByCode = ({ code }: { code: string }) => {
  const accessToken = useAtomValue(accessTokenAtom);
  const { getFetcher } = useAuthAxios();
  return useQuery({
    queryKey: ['leaderName', code],
    queryFn: async () =>
      getFetcher<{ leaderName: string }>(`api/meeting/TRIPLE/${code}`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: !!accessToken,
  });
};
export const useDeleteMeetingGroup = (): UseMutationResult<
  void,
  Error,
  void
> => {
  const { deleteFetcher } = useAuthAxios();
  return useMutation<void, Error, void>({
    mutationFn: () => deleteFetcher('/api/meeting/TRIPLE'),
  });
};
