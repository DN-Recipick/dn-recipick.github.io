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
  saved_at: string;
}

export interface RecipeListResponse {
  recipes: Recipe[];
  count: number;
}
