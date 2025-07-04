export const ENDPOINTS = {
  AUTH: {
    SIGNIN: '/auth/v1/token?grant_type=password',
    SIGNUP: '/auth/v1/signup',
  },
  RECIPE: {
    ADD: '/functions/v1/recipe',
    LIST: '/functions/v1/recipe',
    RECOMMENDED: (id: string) => `/functions/v1/recommend/${id}`,
    ITEM: (id: string) => `/functions/v1/recipe/${id}`,
  },
  INGREDIENT: '/ingredient',
} as const;
