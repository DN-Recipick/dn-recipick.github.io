import { QueryCache, QueryClient } from '@tanstack/react-query';
import { handleAppError } from '@/utils/errorHandler';

export const customQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => handleAppError(error),
    //쿼리 결과 데이터 자체와 상태"를 저장하고 관리하는 저장소 개발환경 위해 잠시 주석
  }),
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
