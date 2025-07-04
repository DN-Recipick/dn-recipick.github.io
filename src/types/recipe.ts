export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  item: string[];
  name: string;
  state: number;
  title: string;
  channel: string;
  video_id: string;
  ingredients: Ingredient[];
  saved_at?: string;
  created_at?: string;
}

export interface RecipeItemResponse extends Omit<Recipe, 'saved_at'> {
  created_at: string;
}
export interface RecipeListResponse {
  recipes: Recipe[];
  count: number;
}

export interface RecommendedRecipesResponse {
  recommends: {
    by_menu: RecipeItemResponse[];
    by_ingredients: RecipeItemResponse[];
  };
}
