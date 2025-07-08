import { queryKeys } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';
import { addExternalRecipe } from '@/features/MyRecipeDetail/api';
import { showToast } from '@/utils/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useAddExternalRecipe = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: addRecipe, isPending: isPendingAddRecipe } = useMutation({
    mutationFn: (id: string) => addExternalRecipe(id),
    onSuccess: () => {
      showToast.success('내 레시피 목록에 추가되었습니다');
      navigate(ROUTES.RECIPES);
      queryClient.invalidateQueries({ queryKey: queryKeys.RECIPE.all });
    },
  });

  return { addRecipe, isPendingAddRecipe };
};
