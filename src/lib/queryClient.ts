import { QueryClient } from '@tanstack/react-query';
import { handleAppError } from '@/utils/errorHandler';

export const customQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5분
    },
    mutations: {
      retry: 0,
      onError: (error) => handleAppError(error),
    },
  },
});
