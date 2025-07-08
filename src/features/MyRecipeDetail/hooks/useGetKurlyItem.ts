import { queryKeys } from '@/constants/queryKeys';
import { getKurlyItems } from '@/features/MyRecipeDetail/api';
import { useQuery } from '@tanstack/react-query';

export const useGetKurlyItem = (ingredientKeyword: string) => {
  const { data, isPending } = useQuery({
    queryKey: queryKeys.KURLY_ITEM(ingredientKeyword),
    queryFn: () => getKurlyItems(ingredientKeyword),
  });

  return { kurlyItems: data, isPending };
};
