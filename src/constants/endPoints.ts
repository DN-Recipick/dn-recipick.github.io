export const ENDPOINTS = {
  AUTH: {
    SIGNIN: '/auth/v1/signin',
    SIGNUP: '/auth/v1/signup',
  },
  RECIPE: {
    ADD: '/recipe',
    LIST: '/recipe',
    ITEM: (id: string) => `/recipe/${id}`,
  },
  INGREDIENT: '/ingredient',
} as const;
