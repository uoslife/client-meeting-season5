import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { errorHandler } from '../../utils/api';
import useAuthAxios from '../axios/useAuthAxios';
interface CreateMeetingTeamRequest {
  teamType: 'SINGLE' | 'TRIPLE';
  isTeamLeader: boolean;
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
    mutationFn: ({ teamType, isTeamLeader }) =>
      postFetcher(`/api/meeting/${teamType}/${isTeamLeader}/create`),
    onSuccess: (data) => {
      console.log(data.code);
    },
    onError: (error) => errorHandler(error),
  });
};
