import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { KurlyItemResponse } from '@/types/kurly';
import type { RecipeItemResponse } from '@/types/recipe';

export const getKurlyItems = (keyword: string): Promise<KurlyItemResponse> =>
  httpClient.get(ENDPOINTS.INGREDIENT, {
    queryParams: { keyword },
    withAuth: true,
  });

export const getRecipeItem = (id: string): Promise<RecipeItemResponse> =>
  httpClient.get(ENDPOINTS.RECIPE.ITEM(id), {
    withAuth: true,
  });
