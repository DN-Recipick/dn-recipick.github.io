import { CustomError } from '@/lib/CustomError';
import { createClient } from '@supabase/supabase-js';
import type {
  AuthResponse,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';

const API_SUPABASE = import.meta.env.VITE_API_SUPABASE;
const API_SUPABASE_KEY = import.meta.env.VITE_API_SUPABASE_KEY;

export const supabaseClient = createClient(API_SUPABASE, API_SUPABASE_KEY);

export const handleAuthRequest = async <
  T extends SignInWithPasswordCredentials | SignUpWithPasswordCredentials,
>(
  fn: (args: T) => Promise<AuthResponse>,
  payload: T,
): Promise<AuthResponse['data']> => {
  const { data, error } = await fn(payload);
  console.log(data, error);
  if (error) {
    const status = error.status || 500;
    throw new CustomError(status, error.message);
  }
  return data;
};
