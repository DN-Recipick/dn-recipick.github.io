import { CustomError } from '@/lib/CustomError';
import { buildFetchOptions, buildUrl, getUnknownErrorMessage, parseResponse } from '@/lib/utils';
import type { RequestConfig } from '@/types/api';

const API_SUPABASE = import.meta.env.VITE_API_SUPABASE;
const DEFAULT_TIMEOUT = Number(import.meta.env.VITE_DEFAULT_TIMEOUT) || 5000;

async function request<T>({ method, endpoint, data, options = {} }: RequestConfig): Promise<T> {
  const {
    baseURL = API_SUPABASE,
    timeout = DEFAULT_TIMEOUT,
    queryParams,
    responseType,
    signal: externalSignal,
  } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  const signal = externalSignal ?? controller.signal;
  const fetchOptions = await buildFetchOptions({ method, data, options });

  try {
    const url = buildUrl(baseURL, endpoint, queryParams);
    const res = await fetch(url, {
      ...fetchOptions,
      signal,
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const rawMessage = errorBody.message;

      throw new CustomError(res.status, rawMessage);
    }

    return await parseResponse(res, responseType);
  } catch (err: unknown) {
    if (err instanceof CustomError) throw err;

    const rawMessage = getUnknownErrorMessage(err);
    console.error('Fetch Error:', rawMessage);

    throw new CustomError(500, rawMessage);
  } finally {
    clearTimeout(timeoutId);
  }
}

export default request;
