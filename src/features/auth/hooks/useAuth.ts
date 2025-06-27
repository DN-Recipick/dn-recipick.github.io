import { useAuthStore } from '@/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/constants/queryKeys';
import { me } from '@/features/apis';
import { useQueryEffect } from '@/hooks/useQueryEffect';

export const useAuth = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const token = localStorage.getItem('token');

  const queryResult = useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: me,
    enabled: !!token,
    retry: false,
  });
  // data 가 처음엔 undefined 이므로 isSuccess 가 false 이고,
  // isPending 가 true 이므로 로딩중임을 나타냄
  // isError 가 true 이면 에러가 발생했음을 나타냄
  useQueryEffect({
    queryResult,
    onSuccess: (data) => setUser(data),
  });

  return {
    isPending: queryResult.isPending,
    isSignin: !!queryResult.data,
  };
};
