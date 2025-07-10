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
    channel
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'recipe',
        },
        (payload) => {
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
    isRealTimePending: data?.recipes.some((recipe) => recipe.state === 0),
    recipes: data?.recipes.filter((recipe) => recipe.state === 1),
    isPending,
  };
};

export default useGetRecipes;
