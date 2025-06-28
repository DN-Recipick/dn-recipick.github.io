export const ROUTES = {
  HOME: '/',
  SIGNIN: '/login',
  SIGNUP: '/signup',
  RECIPES: '/recipes',
  RECIPE: (id: string) => `/recipes/:${id}}`,
  RECIPE_PATH: '/recipes/:id',
  ALL: '*',
};
