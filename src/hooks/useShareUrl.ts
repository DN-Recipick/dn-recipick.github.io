import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { addRecipe } from '@/features/RecipeLink/api';

export const useShareUrl = () => {
  const [searchParams] = useSearchParams();
  const sharedUrl = searchParams.get('url');

  const { mutate } = useMutation({
    mutationFn: (url: string) => addRecipe({ url }),
  });

  useEffect(() => {
    if (sharedUrl) {
      mutate(sharedUrl);
    }
  }, [sharedUrl, mutate]);
};
