import { useAtom } from 'jotai';
import { accessTokenAtom } from '../store/accessTokenAtom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postFetcher } from '../utils/api';
import axios, { AxiosError } from 'axios';

const postRefresh = () => {
  return postFetcher<string>({ url: '/account/refresh/' });
};

const useRefresh = () => {
  const [, setAccessToken] = useAtom(accessTokenAtom);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postRefresh,
    onSuccess: (data: string) => {
      console.log(data);
      // 여기서 encoder 들어가야함
      setAccessToken(data);
    },
    onError: (error: AxiosError | Error) => {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          navigate('/login', { replace: true });
        } else {
          // navigate('/login');
        }
      }
      console.log('refresh 하는 과정에서 오류가 발생했습니다.', error);
    },
  });
};

export { useRefresh };
