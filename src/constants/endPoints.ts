export const ENDPOINTS = {
  AUTH: {
    SIGNIN: '/auth/login',
    SIGNOUT: '/auth/logout',
    SIGNUP: '/auth/signup',
    ME: '/auth/me',
  },
  USERS: {
    LIST: '/users',
    DETAIL: (userId: string | number) => `/users/${userId}`,
    CREATE: '/users',
  },
} as const;
