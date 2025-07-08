import { supabaseClient } from '@/lib/supabaseClient';
import type { SignupPayload, SigninFormType } from '@/types/auth';
import type { AuthTokenResponsePassword, UserResponse } from '@supabase/supabase-js';

export const signin = (payload: SigninFormType): Promise<AuthTokenResponsePassword> =>
  supabaseClient.auth.signInWithPassword(payload);

export const signup = (payload: SignupPayload) => supabaseClient.auth.signUp(payload);

export const getUser = (): Promise<UserResponse> => supabaseClient.auth.getUser();
