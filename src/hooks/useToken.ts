import axios, { AxiosRequestConfig, isAxiosError } from 'axios';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { accessTokenAtom } from '../store/atom/refreshTokenAtom';

export type TokenType = {
  accessToken: string;
  refreshToken: string;
};

const useToken = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const refreshToken = localStorage.getItem('refreshToken');
  const navigate = useNavigate();

  const setToken = async () => {
    try {
      const { accessToken, refreshToken }: TokenType =
        await axios.get('/getToken');
      localStorage.setItem('refreshToken', accessToken);
      setAccessToken(refreshToken);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const getAccessByRefresh = async () => {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    };
    try {
      return axios.get('/refreshGetURL', config);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        navigate('/');
      }
    }
  };

  const addAccessToHeader = (config: AxiosRequestConfig) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  };

  return { setToken, getAccessByRefresh, addAccessToHeader };
};

export default useToken;
