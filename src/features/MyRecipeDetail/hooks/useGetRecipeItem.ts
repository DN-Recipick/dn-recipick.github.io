import { queryKeys } from '@/constants/queryKeys';
import { getRecipeItem } from '@/features/MyRecipeDetail/api';
import { useQuery } from '@tanstack/react-query';

const useGetRecipeItem = (id: string) => {
  const { data: recipeItem, isPending: isPendingRecipeItem } = useQuery({
    queryKey: queryKeys.RECIPE.item(id),
    queryFn: () => getRecipeItem(id),
    enabled: !!id,
  });

  return { recipeItem, isPendingRecipeItem };
};
export default useGetRecipeItem;
