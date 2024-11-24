import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { errorHandler, patchFetcher } from '../../utils/api';

interface UserInfoRequestType {
  age?: string;
  department?: string;
  studentNumber?: string;
  height?: string;
  smoking?: string;
  mbti?: string;
  interest?: string[];
  appearanceType?: string;
  eyelidType?: string;
  studentType?: string;
}

export const patchUserInfo = (): UseMutationResult<
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
        `/api/user`,
        {
          age: age,
          department: department,
          studentNumber: studentNumber,
          height: height,
          smoking: smoking,
          mbti: mbti,
          interest: interest,
        },
        { Authorization: accessToken },
      ),
    onSuccess: () => {},
    onError: (error) => errorHandler(error),
  });
};
