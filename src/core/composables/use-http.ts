import axios from 'axios';
import { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

type UseHttp = {
  http: Readonly<AxiosInstance>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiBaseResponse<T = any> {
  totalSize: number;
  page: number;
  pageSize: number;
  items: T[];
  result: string;
}

let http: AxiosInstance;

export function useHttp(): UseHttp {
  if (!http) {
    http = createHttp();
  }

  function createHttp(): AxiosInstance {
    const http = axios.create({
      timeout: 30000,
    });

    axiosRetry(http, {
      retries: 5,
      retryDelay: axiosRetry.exponentialDelay,
      retryCondition: axiosRetry.isRetryableError,
    });
    return http;
  }

  return {
    http,
  };
}
