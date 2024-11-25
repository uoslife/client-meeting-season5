import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { errorHandler, postFetcher } from '../../utils/api';
import { getBearerToken } from '../../utils/token';
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
  const accessToken = useAtomValue(accessTokenAtom);
  return useMutation<
    CreateMeetingTeamResponse,
    Error,
    CreateMeetingTeamRequest
  >({
    mutationFn: ({ teamType, isTeamLeader }) =>
      postFetcher(`/api/meeting/${teamType}/${isTeamLeader}/create`, null, {
        Authorization: getBearerToken(accessToken),
      }),
    onSuccess: (data) => {
      console.log(data.code);
    },
    onError: (error) => errorHandler(error),
  });
};
