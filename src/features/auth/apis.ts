import { CustomError } from '@/lib/CustomError';
import { handleAuthRequest, supabaseClient } from '@/lib/supabaseClient';
import type { SignupPayload, SigninFormType } from '@/types/auth';
import type { User, AuthError } from '@supabase/supabase-js';

export const signin = (payload: SigninFormType) =>
  handleAuthRequest((args) => supabaseClient.auth.signInWithPassword(args), payload);

export const signup = (payload: SignupPayload) =>
  handleAuthRequest((args) => supabaseClient.auth.signUp(args), payload);

type SafeUserResponse = {
  data: { user: User | null };
  error: null;
};

export const getUser = async (): Promise<SafeUserResponse> => {
  const { data, error } = await supabaseClient.auth.getUser();

  const isSessionMissing = (error as AuthError)?.name === 'AuthSessionMissingError';

  if (error && !isSessionMissing) {
    throw new CustomError(error.status ?? 500, error.message);
  }

  return {
    data: { user: data.user ?? null },
    error: null,
  };
};
