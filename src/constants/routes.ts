export const ROUTES = {
  HOME: '/',
  SIGNIN: '/login',
  SIGNUP: '/signup',
  RECIPES: '/recipes',
  RECIPE: (id: string) => `/recipes/${id}`,
  SHARE_RECIPE: '/add',
  NOT_FOUND: '/404',
  RECIPE_PATH: '/recipes/:id',
  ALL: '*',
};
