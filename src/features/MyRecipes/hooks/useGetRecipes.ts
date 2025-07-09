import { queryKeys } from '@/constants/queryKeys';
import { getRecipes } from '@/features/MyRecipes/api';
import { supabaseClient } from '@/lib/supabaseClient';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const QUERY_KEY_RECIPES = queryKeys.RECIPE.all;

const useGetRecipes = () => {
  const queryClient = useQueryClient();

  const { data, isPending } = useQuery({
    queryKey: QUERY_KEY_RECIPES,
    queryFn: getRecipes,
  });

  useEffect(() => {
    const channel = supabaseClient.channel('recipe-state');

    // UPDATE 이벤트에서 state가 1이 될 때만 쿼리 무효화
    channel
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'recipe',
        },
        (payload) => {
          console.log('레시피 업데이트됨:', payload.new);
          if (payload.new.state === 1) {
            queryClient.invalidateQueries({ queryKey: QUERY_KEY_RECIPES });
          }
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [queryClient]);

  return {
    recipes: data?.recipes,
    isPending,
  };
};

export default useGetRecipes;
