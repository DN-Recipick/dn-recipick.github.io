import { queryKeys } from '@/constants/queryKeys';
import { getUser } from '@/features/auth/apis';
import { supabaseClient } from '@/lib/supabaseClient';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const useGetUser = () => {
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: getUser,
    staleTime: Infinity,
  });
  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      queryClient.setQueryData(queryKeys.auth.me, {
        data: { user: session?.user ?? null },
        error: null,
      });
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [queryClient]);

  const user = data?.data.user;

  return {
    user,
    isPending,
    isSignedIn: Boolean(user),
  };
};

export default useGetUser;
