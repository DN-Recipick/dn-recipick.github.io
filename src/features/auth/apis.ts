import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { SigninResponse, SignupPayload, SigninFormType } from '@/types/auth';
import { getSupabaseApiKey } from '@/utils/auth';

export const signin = (payload: SigninFormType): Promise<SigninResponse> =>
  httpClient.post(ENDPOINTS.AUTH.SIGNIN, payload, { headers: getSupabaseApiKey() });

export const signup = (payload: SignupPayload) =>
  httpClient.post(ENDPOINTS.AUTH.SIGNUP, payload, { headers: getSupabaseApiKey() });
