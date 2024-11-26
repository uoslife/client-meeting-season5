import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { errorHandler, patchFetcher } from '../../utils/api';
import { getBearerToken } from '../../utils/token';

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
  return useMutation<null, Error, UserRequestType>({
    mutationFn: ({ name, phoneNumber, genderType, kakaoTalkId }) =>
      patchFetcher(
        `/api/user`,
        {
          name,
          phoneNumber,
          genderType: genderType === '남성' ? 'MALE' : 'FEMALE',
          kakaoTalkId,
        },
        { Authorization: getBearerToken(accessToken) },
      ),
    onSuccess: () => {},
    onError: (error) => errorHandler(error),
  });
};

const usePatchUserInfo = (): UseMutationResult<
  null,
  Error,
  UserInfoRequestType
> => {
  const accessToken = useAtomValue(accessTokenAtom);

  return useMutation<null, Error, UserInfoRequestType>({
    mutationFn: ({
      age,
      department,
      studentNumber,
      height,
      smoking,
      mbti,
      interest,
    }) =>
      patchFetcher(
        `/api/user/user-info`,
        {
          age: age,
          department: department,
          studentNumber: studentNumber,
          height: height,
          smoking: smoking,
          mbti: mbti,
          interest: interest,
        },
        { Authorization: getBearerToken(accessToken) },
      ),
    onSuccess: () => {},
    onError: (error) => errorHandler(error),
  });
};
export { usePatchUser, usePatchUserInfo };
