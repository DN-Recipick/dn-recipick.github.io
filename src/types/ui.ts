import type { RecipeLink } from '@/validation/recipeLink.schema';

export type Theme = 'light' | 'dark' | 'system';

export type FocusableField = keyof RecipeLink;

export type ModalType = 'ingredient' | 'recommendRecipes' | null;
