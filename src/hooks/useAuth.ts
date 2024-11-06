import { useAtom } from 'jotai';
import { accessTokenAtom } from '../store/accessTokenAtom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postFetcher } from '../utils/api';

const postRefresh = () => {
  return postFetcher('/account/refresh/');
};

const useRefresh = () => {
  // accessToken을 재발급하는 로직
  // accessToken이 없을때 혹은 만료되었을 때 실행
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const navigate = useNavigate();

  return useMutation(postRefresh, {
    onSuccess: (data: string) => {
      console.log(data);
      // 여기서 매핑
      setAccessToken();
    },
    onError: (err: AxiosError) => {
      if (err.response?.status === 401) {
        navigate('/login', { replace: true });
      }
      navigate('/login');
      console.log('refresh error : ', err);
    },
  });
};
