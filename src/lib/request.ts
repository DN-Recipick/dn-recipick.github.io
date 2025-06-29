import { CustomError } from '@/lib/errors';
import { buildUrl } from '@/lib/utils';
import type { HttpMethod, FetcherOptions } from '@/types/api';

const API_SUPABASE = import.meta.env.VITE_API_SUPABASE;
const API_SUPABASE_KEY = import.meta.env.VITE_API_SUPABASE_KEY;
const DEFAULT_TIMEOUT = import.meta.env.VITE_DEFAULT_TIMEOUT;

async function request<T>(
  method: HttpMethod,
  endpoint: string,
  data?: unknown,
  options: FetcherOptions = {},
): Promise<T> {
  const {
    baseURL = API_SUPABASE,
    timeout = DEFAULT_TIMEOUT || 5000,
    headers = {},
    queryParams,
    ...rest
  } = options;

  const controller = new AbortController();

  const apiKeyHeader: Record<string, string> =
    baseURL === API_SUPABASE ? { apikey: API_SUPABASE_KEY } : {};

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...apiKeyHeader,
      ...headers,
    },
    signal: controller.signal,
    ...rest,
    ...(method !== 'GET' && data !== undefined && { body: JSON.stringify(data) }),
  };

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const url = buildUrl(baseURL, endpoint, queryParams);
    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const rawMessage = errorBody.message;

      throw new CustomError(res.status, rawMessage);
    }

    return await res.json();
  } catch (err: unknown) {
    if (err instanceof CustomError) throw err;
    // 여기에 들어오는 건 대부분 fetch 자체가 실패한 경우
    throw new CustomError(500, '네트워크 에러 또는 알 수 없는 에러');
  } finally {
    clearTimeout(timeoutId);
  }
}

export default request;
