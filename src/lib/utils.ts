import { ERROR_MESSAGES, DEFAULT_ERROR_MESSAGE } from '@/constants/messages';
import { CustomError } from '@/lib/errors';
import type { ResponseType } from '@/types/api';
import type { ErrorStatusCode } from '@/types/error';
import { getAuthHeaders } from '@/utils/auth';
import type { CustomErrorType, RequestConfig } from './../types/api';
type FetchOptionsConfig = Omit<RequestConfig, 'endpoint' | 'signal'>;

const API_SUPABASE_KEY = import.meta.env.VITE_API_SUPABASE_KEY;

export const createCustomError = (
  status: ErrorStatusCode,
  rawMessage?: string,
): CustomErrorType => {
  return {
    status,
    message: ERROR_MESSAGES[status] || DEFAULT_ERROR_MESSAGE,
    rawMessage,
  };
};

export const buildUrl = (
  baseURL: string | undefined,
  endpoint: string,
  queryParams?: Record<string, string | number | boolean | undefined>,
) => {
  let url = `${baseURL}${endpoint}`;
  if (queryParams && Object.keys(queryParams).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined) searchParams.append(key, String(value));
    });
    url += `?${searchParams.toString()}`;
  }
  return url;
};

export const buildFetchOptions = ({
  method,
  data,
  options = {},
}: FetchOptionsConfig): RequestInit => {
  const { withAuth, withApikey, ...rest } = options;
  //get 일떄 application : json 없어야한다
  //get 일때 body 자체가 없어야한다
  const mergedHeaders: HeadersInit = {
    ...(method !== 'GET' && { 'Content-Type': 'application/json' }),
    ...(withAuth ? getAuthHeaders() : {}),
    ...(withApikey ? { apikey: API_SUPABASE_KEY } : {}),
    ...(options.headers ?? {}),
  };
  const body = method !== 'GET' && data !== undefined ? { body: JSON.stringify(data) } : {};

  return {
    method,
    headers: mergedHeaders,
    ...body,
    ...rest,
  };
};

export const parseResponse = async (res: Response, responseType: ResponseType = 'json') => {
  try {
    switch (responseType) {
      case 'blob':
        return await res.blob();
      case 'text':
        return await res.text();
      default:
        return await res.json();
    }
  } catch (err) {
    throw new CustomError(res.status, getUnknownErrorMessage(err));
  }
};

export const getUnknownErrorMessage = (err: unknown) => (err as Error)?.message ?? '알 수 없음';
