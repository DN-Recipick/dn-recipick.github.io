import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import { getAuthHeaders } from '@/utils/auth';
import { type SignupForm, type SigninForm } from '@/validation/auth.schema';
import type { User } from '@/types/user';

export const signin = (payload: SigninForm) => httpClient.post(ENDPOINTS.AUTH.SIGNIN, payload);

export const signup = (payload: SignupForm) => httpClient.post(ENDPOINTS.AUTH.SIGNUP, payload);

export const me = (): Promise<User> =>
  httpClient.get(ENDPOINTS.AUTH.ME, {
    headers: getAuthHeaders(),
  });
