export const queryKeys = {
  auth: {
    me: ['auth', 'me'],
  },
  users: {
    all: ['users'],
    detail: (id: string | number) => ['users', id],
  },
  RECIPE: {
    all: ['recipes'],
    recommended: (id: string) => ['recommendedRecipes', id],
    item: (id: string) => ['recipes', id],
  },
  KURLY_ITEM: (keyword: string) => ['kurly', keyword],
} as const;
