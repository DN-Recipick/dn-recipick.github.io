import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { RecipeListResponse } from '@/types/recipe';
import { getAuthHeaders } from '@/utils/auth';

export const getRecipes = (): Promise<RecipeListResponse> =>
  httpClient.get(ENDPOINTS.RECIPE.LIST, { headers: getAuthHeaders() });
