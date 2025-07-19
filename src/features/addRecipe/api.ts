import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { RecipeLink } from '@/validation/recipeLink.schema';

export const addRecipe = (payload: RecipeLink) =>
  httpClient.post(ENDPOINTS.RECIPE.ADD, payload, { withAuth: true });
