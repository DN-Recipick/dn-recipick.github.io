import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { SigninResponse, SignupPayload, SigninFormType } from '@/types/auth';

export const signin = (payload: SigninFormType): Promise<SigninResponse> =>
  httpClient.post(ENDPOINTS.AUTH.SIGNIN, payload, { withApikey: true });

export const signup = (payload: SignupPayload) =>
  httpClient.post(ENDPOINTS.AUTH.SIGNUP, payload, { withApikey: true });
