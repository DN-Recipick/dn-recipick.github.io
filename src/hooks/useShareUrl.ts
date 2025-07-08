import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addRecipe } from '@/features/RecipeLink/api';
import { ROUTES } from '@/constants/routes';
import { queryKeys } from '@/constants/queryKeys';

export const useShareUrl = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const sharedUrl = searchParams.get('url');
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (url: string) => addRecipe({ url }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.RECIPE.all });
      navigate(ROUTES.RECIPES);
    },
  });

  useEffect(() => {
    if (sharedUrl) {
      mutate(sharedUrl);
    }
  }, [sharedUrl, mutate]);
};
