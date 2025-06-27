import { CustomError } from '@/lib/errors';
import type { HttpMethod, FetcherOptions } from '@/types/api';

async function request<T>(
  method: HttpMethod,
  endpoint: string,
  data?: unknown,
  options: FetcherOptions = {},
): Promise<T> {
  const {
    timeout = import.meta.env.VITE_DEFAULT_TIMEOUT || 5000,
    headers = {},
    baseURL = import.meta.env.VITE_API_BASE_URL,
    ...rest
  } = options;
  const controller = new AbortController();

  const fetchOptions: RequestInit = {
    method,
    headers,
    signal: controller.signal,
    ...rest,
    ...(method !== 'GET' && data !== undefined && { body: JSON.stringify(data) }),
  };

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(`${baseURL}${endpoint}`, fetchOptions);

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
