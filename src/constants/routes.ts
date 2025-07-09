export const ROUTES = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  RECIPES: '/recipes',
  RECIPE: (id: string) => `/recipes/${id}`,
  SHARED_RECIPE: '/add',
  NOT_FOUND: '/404',
  RECIPE_PATH: '/recipes/:id',
  ALL: '*',
};
