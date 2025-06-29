export const ENDPOINTS = {
  AUTH: {
    SIGNIN: '/auth/v1/token?grant_type=password',
    SIGNUP: '/auth/v1/signup',
  },
  RECIPE: {
    ADD: '/functions/v1/recipe',
    LIST: '/functions/v1/recipe',
    ITEM: (id: string) => `/recipe/${id}`,
  },
  INGREDIENT: '/ingredient',
} as const;
