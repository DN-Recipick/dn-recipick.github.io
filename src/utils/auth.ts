const API_SUPABASE_KEY = import.meta.env.VITE_API_SUPABASE_KEY;

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
});

export const getSupabaseApiKey = () => ({
  apikey: API_SUPABASE_KEY,
});
