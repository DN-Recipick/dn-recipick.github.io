import { ERROR_MESSAGES, DEFAULT_ERROR_MESSAGE } from '@/constants/messages';
import type { CustomError } from '@/types/api';
import type { ErrorStatusCode } from '@/types/error';

export const createCustomError = (status: ErrorStatusCode, rawMessage?: string): CustomError => {
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
