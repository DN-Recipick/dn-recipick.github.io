import { supabaseClient } from '@/lib/supabaseClient';

const API_SUPABASE_KEY = import.meta.env.VITE_API_SUPABASE_KEY;

export const getAuthHeaders = async () => {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  const accessToken = session?.access_token ?? '';

  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

export const getSupabaseApiKey = () => ({
  apikey: API_SUPABASE_KEY,
});
