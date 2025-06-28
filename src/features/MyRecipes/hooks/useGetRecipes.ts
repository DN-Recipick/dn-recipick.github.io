import { queryKeys } from '@/constants/queryKeys';
import { getRecipes } from '@/features/MyRecipes/api';
import { useQuery } from '@tanstack/react-query';

const useGetRecipes = () => {
  const { data, isPending } = useQuery({
    queryKey: queryKeys.RECIPE.all,
    queryFn: getRecipes,
  });
  return { data, isPending };
};
export default useGetRecipes;
