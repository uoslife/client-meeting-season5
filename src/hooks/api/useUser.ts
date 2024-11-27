import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { errorHandler } from '../../utils/api';
import { getBearerToken } from '../../utils/token';
import useAuthAxios from '../axios/useAuthAxios';

interface UserInfoRequestType {
  age?: string;
  department?: string | null;
  studentNumber?: string | null;
  height?: string;
  smoking?: string;
  mbti?: string;
  interest?: string[];
  appearanceType?: string;
  eyelidType?: string;
  studentType?: string;
}

interface UserRequestType {
  name: string;
  phoneNumber: string;
  genderType: string;
  kakaoTalkId: string;
}

const usePatchUser = (): UseMutationResult<null, Error, UserRequestType> => {
  const accessToken = useAtomValue(accessTokenAtom);
  const { patchFetcher } = useAuthAxios();

  return useMutation<null, Error, UserRequestType>({
    mutationFn: ({ name, phoneNumber, genderType, kakaoTalkId }) =>
      patchFetcher<null>(
        '/api/user',
        {
          name,
          phoneNumber,
          genderType: genderType === '남성' ? 'MALE' : 'FEMALE',
          kakaoTalkId,
        },
        { Authorization: getBearerToken(accessToken) },
      ),
    onSuccess: () => {},
    onError: errorHandler,
  });
};

const usePatchUserInfo = (): UseMutationResult<
  null,
  Error,
  UserInfoRequestType
> => {
  const accessToken = useAtomValue(accessTokenAtom);
  const { patchFetcher } = useAuthAxios();

  return useMutation<null, Error, UserInfoRequestType>({
    mutationFn: (userInfo) =>
      patchFetcher<null>('/api/user/user-info', userInfo, {
        Authorization: getBearerToken(accessToken),
      }),
    onSuccess: () => {},
    onError: errorHandler,
  });
};

const useGetUserInfo = (): UseQueryResult<UserInfoRequestType, Error> => {
  const accesstoken = useAtomValue(accessTokenAtom);
  const { getFetcher } = useAuthAxios();

  return useQuery<UserInfoRequestType, Error>({
    queryKey: ['userInfo', accesstoken],
    queryFn: () => getFetcher<UserInfoRequestType>('/api/user/all-info'),
    refetchOnWindowFocus: false,
    select: (data) => data,
    enabled: !!accesstoken,
  });
};
export { usePatchUser, usePatchUserInfo, useGetUserInfo };
