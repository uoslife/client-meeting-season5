import axios, { isAxiosError } from 'axios';
import useToken from './useToken';
import { AxiosRequestConfig } from 'axios';

const useMethod = () => {
  const { addAccessToHeader, getAccessByRefresh } = useToken();

  const request = async (
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    config: AxiosRequestConfig = {},
  ) => {
    config = addAccessToHeader(config);
    try {
      return await axios[method](url, config);
    } catch (error) {
      if (isAxiosError(error) && config.headers) {
        const newAccessToken = await getAccessByRefresh();
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return await axios[method](url, config);
      }
    }
  };

  const get = async (url: string, config: AxiosRequestConfig = {}) => {
    return request('get', url, config);
  };

  const post = async (url: string, config: AxiosRequestConfig = {}) => {
    return request('post', url, config);
  };

  const put = async (url: string, config: AxiosRequestConfig = {}) => {
    return request('put', url, config);
  };

  const del = async (url: string, config: AxiosRequestConfig = {}) => {
    return request('delete', url, config);
  };

  return { get, post, put, del };
};
export default useMethod;
