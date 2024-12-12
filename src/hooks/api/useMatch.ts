import { useAtomValue } from 'jotai';
import useAuthAxios from '../axios/useAuthAxios';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MatchResultType } from '../../lib/types/meeting';

interface UseMatchStatusResponse {
  single: boolean;
  triple: boolean;
}

interface UseMatchResultRequestType {
  teamType: 'SINGLE' | 'TRIPLE';
}

export const useMatchStatus = () => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['matchStatus'],
    queryFn: () =>
      getFetcher<UseMatchStatusResponse>(
        '/api/match/me/participations?season=5',
      ),
    refetchOnWindowFocus: false,
    retry: 2,
    enabled: !!accessToken,
  });
};

export const useMatchResult = ({
  teamType,
}: UseMatchResultRequestType): UseQueryResult<MatchResultType, Error> => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['matchResult', teamType],
    queryFn: () =>
      getFetcher<MatchResultType>(`/api/match/${teamType}/info?season=5`, {
        season: String(5),
      }),
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: !!accessToken,
  });
};
