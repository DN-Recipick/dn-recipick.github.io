import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { KurlyItem } from '@/types/kurly';
import type { RecipeItemResponse, RecommendedRecipesResponse } from '@/types/recipe';

export const getKurlyItems = async (keyword: string): Promise<KurlyItem[]> =>
  httpClient.get(ENDPOINTS.INGREDIENT, {
    queryParams: { keyword },
    withAuth: true,
  });
export const getRecipeItem = (id: string): Promise<RecipeItemResponse> =>
  httpClient.get(ENDPOINTS.RECIPE.ITEM(id), {
    withAuth: true,
  });

export const getRecommendedRecipes = (id: string): Promise<RecommendedRecipesResponse> =>
  httpClient.get(ENDPOINTS.RECIPE.RECOMMENDED(id), {
    withAuth: true,
  });

export const addExternalRecipe = (id: string) =>
  httpClient.post(ENDPOINTS.RECIPE.ADD_EXTERNAL_RECIPE(id), undefined, {
    withAuth: true,
  });
