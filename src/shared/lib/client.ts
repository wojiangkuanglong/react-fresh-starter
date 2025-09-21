import type { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

const AXIOS_BASE = '/insight';
declare const AXIOS_HEADERS: string;

export type RequestConfig<TData = unknown> = {
  url?: string;
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE' | 'OPTIONS';
  params?: unknown;
  data?: TData | FormData;
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
  signal?: AbortSignal;
  headers?: AxiosRequestConfig['headers'];
};

export type ResponseConfig<TData = unknown> = {
  data: {
    result: TData;
    code: number;
    message: string;
  };
  status: number;
  statusText: string;
  headers?: AxiosResponse['headers'];
};

export type ResponseErrorConfig<TError = unknown> = TError;

export const axiosInstance = axios.create({
  baseURL: typeof AXIOS_BASE !== 'undefined' ? AXIOS_BASE : undefined,
  headers:
    typeof AXIOS_HEADERS !== 'undefined' ? (JSON.parse(AXIOS_HEADERS) as AxiosHeaders) : undefined,
});

export const client = async <TData, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>,
): Promise<ResponseConfig<TData>> => {
  const promise = axiosInstance
    .request<TVariables, ResponseConfig<TData>>({ ...config })
    .catch((e: AxiosError<TError>) => {
      throw e;
    });

  return promise;
};

export default client;
