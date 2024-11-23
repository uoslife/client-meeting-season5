import { useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postFetcher } from '../../utils/api';
import { AxiosError } from 'axios';

const postRefresh = () => {
  return postFetcher<string>({ url: '/api/auth/reissue' });
};

//실패 시 start 페이지로 라우팅하는 훅
const useRefresh = () => {
  const navigate = useNavigate();
  const authMutation = useAuthCheck();

  if (authMutation.isError) {
    navigate('/');
  }
  return authMutation;
};

//noAuth에서 인증 정보 확인만 진행
const useAuthCheck = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);

  return useMutation({
    mutationFn: postRefresh,
    onSuccess: (data: string) => {
      setAccessToken(data);
    },
    onError: (error: AxiosError | Error) => {
      console.log(error, '로그인이 되어있지 않음.');
    },
  });
};

export { useRefresh, useAuthCheck };
