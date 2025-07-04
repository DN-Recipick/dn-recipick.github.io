import { queryKeys } from '@/constants/queryKeys';
import { getRecommendedRecipes } from '@/features/MyRecipeDetail/api';
import { useQuery } from '@tanstack/react-query';

const useRecommendedRecipes = (id: string) => {
  const { data, isPending } = useQuery({
    queryKey: queryKeys.RECIPE.recommended(id),
    queryFn: () => getRecommendedRecipes(id),
  });

  return {
    recommendedRecipesByMenu: data?.recommends.by_menu,
    recommendedRecipesByIngredients: data?.recommends.by_ingredients,
    isPending,
  };
};

export default useRecommendedRecipes;
