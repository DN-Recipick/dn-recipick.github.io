export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetcherOptions extends Omit<RequestInit, 'method' | 'body'> {
  timeout?: number;
  headers?: HeadersInit;
  baseURL?: string;
}

export interface HttpClient {
  get: <T = unknown>(endpoint: string, options?: FetcherOptions) => Promise<T>;
  post: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  put: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  patch: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
  delete: <T = unknown>(endpoint: string, data?: unknown, options?: FetcherOptions) => Promise<T>;
}
export interface CustomError {
  status: number;
  message?: string;
  rawMessage?: string;
}
