import { useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { errorHandler, postFetcher } from '../../utils/api';

const postRefresh = async () => {
  return await postFetcher<{ accessToken: string }>('/api/auth/reissue');
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
    onSuccess: (data: { accessToken: string }) => {
      setAccessToken(data.accessToken);
    },
    onError: (error) => errorHandler(error),
  });
};

export { useRefresh, useAuthCheck };
