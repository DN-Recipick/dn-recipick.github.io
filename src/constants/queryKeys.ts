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
  },
  KURLY_ITEM: (keyword: string) => ['kurly', keyword],
} as const;
