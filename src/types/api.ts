import type { SignupForm } from '@/validation/auth.schema';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetcherOptions extends Omit<RequestInit, 'method' | 'body'> {
  queryParams?: Record<string, string | number | boolean | undefined>;
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
export interface SigninResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
  };
}

export type SignupPayload = Pick<SignupForm, 'email' | 'password'>;
