import { useMutation, UseMutationResult } from '@tanstack/react-query';
import useAuthAxios from '../axios/useAuthAxios';
interface CreateMeetingTeamRequest {
  teamType: 'SINGLE' | 'TRIPLE';
}

interface CreateMeetingTeamResponse {
  code: string;
}

export const useCreateMeetingTeam = (): UseMutationResult<
  CreateMeetingTeamResponse,
  Error,
  CreateMeetingTeamRequest
> => {
  const { postFetcher } = useAuthAxios();
  return useMutation<
    CreateMeetingTeamResponse,
    Error,
    CreateMeetingTeamRequest
  >({
    mutationFn: ({ teamType }) =>
      postFetcher(`/api/meeting/${teamType}/create`),
    onError: (error) => error,
  });
};
