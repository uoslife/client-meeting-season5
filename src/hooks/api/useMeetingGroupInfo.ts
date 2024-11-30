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
      getFetcher<undefined>(`api/meeting/TRIPLE/info?status=COMPLETED`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: !!accessToken,
  });
};
export const useGetMeetingGroupInfo = () => {
  const { getFetcher } = useAuthAxios();
  return useQuery({
    queryKey: ['meetingTeamInfo', 'TRIPLE'],
    queryFn: () =>
      getFetcher<{ code: string; meetingTeamUserProfiles: UserInfoType[] }>(
        `api/meeting/TRIPLE/info?status=UNCOMPLETED`,
      ),
    refetchOnWindowFocus: false,
    select: (data: { code: string; meetingTeamUserProfiles: UserInfoType[] }) =>
      data,
    retry: false,
    enabled: false,
  });
};

export const useGetLeaderNameByCode = ({ code }: { code: string }) => {
  const { getFetcher } = useAuthAxios();
  return useQuery({
    queryKey: ['leaderName', code],
    queryFn: async () =>
      getFetcher<{ leaderName: string }>(`api/meeting/TRIPLE/${code}`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: false,
  });
};

// export const useDeleteMeetingGroup = () => {
//   const { deleteFetcher } = useAuthAxios();
// };
