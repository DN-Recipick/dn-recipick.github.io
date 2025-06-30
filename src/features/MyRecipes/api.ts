import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { RecipeListResponse } from '@/types/recipe';

export const getRecipes = (): Promise<RecipeListResponse> =>
  httpClient.get(ENDPOINTS.RECIPE.LIST, { withAuth: true });
