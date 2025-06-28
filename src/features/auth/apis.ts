import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { SigninResponse, SignupPayload } from '@/types/api';
import type { SigninForm } from '@/validation/auth.schema';

export const signin = (payload: SigninForm): Promise<SigninResponse> =>
  httpClient.post(ENDPOINTS.AUTH.SIGNIN, payload);

export const signup = (payload: SignupPayload) => httpClient.post(ENDPOINTS.AUTH.SIGNUP, payload);
