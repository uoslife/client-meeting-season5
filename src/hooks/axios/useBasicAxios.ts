import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const logOnDev = (message: string): void => {
  if (import.meta.env.MODE === 'development') {
    console.log(message);
  }
};

const handleError = async (message: string): Promise<void> => {
  console.error('Error:', message);
};

const useBasicAxios = () => {
  const baseAxiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER,
    withCredentials: true,
  });

  const onRequest = (
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig => {
    const { method, url } = config;
    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

    if (method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
      config.timeout = 3000;
    }
    return config;
  };

  const onResponse = (response: AxiosResponse): AxiosResponse => {
    const { method, url } = response.config;
    const { status } = response;
    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);
    return response;
  };

  const onErrorResponse = (error: AxiosError | Error): Promise<never> => {
    if (axios.isAxiosError(error)) {
      // AxiosError인 경우 총 3가지의 경우가 존재함
      // 서버가 응답을 했지만 http 코드가 정상 응답 코드가 아닌경우
      // 이땐 request, response가 둘 다 존재
      if (error.response) {
        const { message } = error;
        const config = error.config as AxiosRequestConfig;
        const { method, url } = config;
        const status = error.response?.status;

        logOnDev(
          `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
        );
        switch (status) {
          case 401:
            handleError('토큰이 만료되었습니다.');
            break;
          case 403:
            handleError('권한이 없습니다.');
            break;
          case 404:
            handleError('잘못된 요청입니다.');
            break;
          case 500:
            handleError('서버에 문제가 발생했습니다.');
            break;
          default:
            handleError('알 수 없는 오류가 발생했습니다.');
            break;
        }
      } else if (error.request) {
        // response는 없고 request만 있는경우
        // 이땐 서버의 응답이 사라졌다고 생각하면 됨.
        // 서버의 응답이 없거나 네트워크 문제가 발생.
        logOnDev(
          `서버의 응답이 없거나 네트워크 문제가 발생하여 응답이 사라졌습니다.`,
        );
      } else {
        // request, response 둘 다 없는 경우
        // url이 존재하지 않거나 인자 값이 없는 경우
        // 설정문제, 프로토콜 문제, cors에러 등등
        logOnDev('axios 설정을 확인해 주세요');
      }
    } else {
      // AxiosError가 아닌 경우
      // 즉, 로직의 문제인데 결국 여기를 탈 수 없음
      logOnDev(`🚨 [API] | Error ${error.message}`);
      handleError(error.message);
    }
    return Promise.reject(error);
  };
  const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest);
    instance.interceptors.response.use(onResponse, onErrorResponse);
    return instance;
  };
  const basicAxiosInstance = setupInterceptors(baseAxiosInstance);

  const getFetcher = async <T>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await basicAxiosInstance.get<T>(url, {
      responseType: 'json',
      headers,
    });
    return response.data;
  };
  const postFetcher = async <T>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await basicAxiosInstance.post<T>(url, data, {
      responseType: 'json',
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
    return response.data;
  };
  const putFetcher = async <T>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await basicAxiosInstance.put<T>(url, data, {
      responseType: 'json',
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
    return response.data;
  };
  const patchFetcher = async <T>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await basicAxiosInstance.patch<T>(url, data, {
      responseType: 'json',
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
    return response.data;
  };
  const deleteFetcher = async <T>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await basicAxiosInstance.delete<T>(url, {
      responseType: 'json',
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
    return response.data;
  };
  return { getFetcher, postFetcher, putFetcher, patchFetcher, deleteFetcher };
};

export default useBasicAxios;
