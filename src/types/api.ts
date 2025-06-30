export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetcherOptions extends Omit<RequestInit, 'method' | 'body'> {
  queryParams?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
  headers?: HeadersInit;
  baseURL?: string;
  withAuth?: boolean;
  withApikey?: boolean;
  responseType?: ResponseType;
  signal?: AbortSignal;
  //retry?: number;
  cache?: 'no-cache' | 'force-cache';
}

export interface RequestConfig {
  method: HttpMethod;
  endpoint: string;
  data?: unknown;
  options?: FetcherOptions;
}

export type ResponseType = 'json' | 'blob' | 'text';

export interface HttpClient {
  get: <T = unknown>(endpoint: string, options?: FetcherOptions) => Promise<T>;
  post: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  put: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  patch: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  delete: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
}
export interface CustomErrorType {
  status: number;
  message?: string;
  rawMessage?: string;
}
