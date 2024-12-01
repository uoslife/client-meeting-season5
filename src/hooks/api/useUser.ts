import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { errorHandler } from '../../utils/api';
import { getBearerToken } from '../../utils/token';
import useAuthAxios from '../axios/useAuthAxios';
import { useNavigate } from 'react-router-dom';
import useBasicAxios from '../axios/useBasicAxios';

type UserProfileResponseType = {
  name: string | null;
  genderType: 'MALE' | 'FEMALE' | null;
  age: string | null;
  phoneNumber: string | null;
  kakaoTalkId: string | null;
  email: string | null;
  department: string | null;
  studentNumber: number | null;
  height: number | null;
  smoking: boolean | null;
  mbti: string | null;
  interest: string[];
  appearanceType: string | null;
  eyelidType: string | null;
  studentType: string | null;
};

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
  studentType?: 'UNDERGRADUATE' | 'POSTGRADUATE' | 'GRADUATE';
}

interface UserRequestType {
  name: string;
  phoneNumber: string;
  genderType: string;
  kakaoTalkId: string;
}

interface UserStatusResponseType {
  singleTeamBranch: 'NOT_CREATED' | 'JUST_CREATED' | 'COMPLETED';
  tripleTeamBranch: 'NOT_CREATED' | 'JUST_CREATED' | 'COMPLETED' | 'JOINED';
}

const useCheckKakao = (kakaoTalkId: string): UseQueryResult => {
  const { getFetcher } = useAuthAxios();
  return useQuery({
    queryKey: ['kakao', kakaoTalkId],
    queryFn: () =>
      getFetcher(`/api/user/check/kakao-talk-id?kakaoTalkId=${kakaoTalkId}`),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: false,
  });
};

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
  });
};

const useGetUserInfo = (): UseQueryResult<UserProfileResponseType, Error> => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getFetcher<UserProfileResponseType>('/api/user/all-info'),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: !!accessToken,
  });
};

const useGetUserStatus = (): UseQueryResult<UserStatusResponseType, Error> => {
  const { getFetcher } = useAuthAxios();
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery({
    queryKey: ['userStatus'],
    queryFn: () => getFetcher<UserStatusResponseType>('/api/user/status'),
    refetchOnWindowFocus: false,
    select: (data) => data,
    retry: false,
    enabled: !!accessToken,
  });
};

const useLogout = (): UseMutationResult<void, Error, void> => {
  const { postFetcher } = useAuthAxios();
  const navigate = useNavigate();
  const setAccessToken = useSetAtom(accessTokenAtom);
  return useMutation({
    mutationFn: () => postFetcher('/api/auth/logout'),
    onSuccess: () => {
      setAccessToken('');
      navigate('/');
    },
  });
};

export {
  usePatchUser,
  usePatchUserInfo,
  useGetUserInfo,
  useGetUserStatus,
  useLogout,
  useCheckKakao,
};
