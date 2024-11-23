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
    config.timeout = 3000; // Set timeout for GET requests
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
  } else {
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

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER,
  withCredentials: true,
});

setupInterceptors(axiosInstance);

export const getFetcher = async <T>(
  url: string,
  headers: Record<string, string>,
): Promise<T> => {
  const response = await axiosInstance.get<T>(url, {
    responseType: 'json',
    headers,
  });
  return response.data;
};

export const postFetcher = async <T>(
  url: string,
  data?: unknown,
  headers?: Record<string, string>,
): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data, {
    responseType: 'json',
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const putFetcher = async <T>(
  url: string,
  data?: unknown,
  headers?: Record<string, string>,
): Promise<T> => {
  const response = await axiosInstance.put<T>(url, data, {
    responseType: 'json',
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
  return response.data;
};
