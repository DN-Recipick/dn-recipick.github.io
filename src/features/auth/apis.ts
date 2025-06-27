import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import { type SignupForm, type SigninForm } from '@/validation/auth.schema';

const SUPABASE_API = import.meta.env.VITE_API_SUPABASE;

export const signin = (payload: SigninForm) =>
  httpClient.post(ENDPOINTS.AUTH.SIGNIN, payload, {
    baseURL: SUPABASE_API,
  });

export const signup = (payload: SignupForm) =>
  httpClient.post(ENDPOINTS.AUTH.SIGNUP, payload, {
    baseURL: SUPABASE_API,
  });
