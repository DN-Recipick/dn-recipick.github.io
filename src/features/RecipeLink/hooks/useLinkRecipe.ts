import { queryKeys } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';
import useSetFormFocus from '@/features/MyRecipes/hooks/useSetFormFocus';
import { addRecipe } from '@/features/RecipeLink/api';
import { recipeLinkScheme, type RecipeLink } from '@/validation/recipeLink.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useLinkRecipe = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<RecipeLink>({
    resolver: zodResolver(recipeLinkScheme),
    defaultValues: {
      url: '',
    },
  });
  useSetFormFocus({ setFocus, focusName: 'url' });

  const { isPending, mutate } = useMutation({
    mutationFn: (formData: RecipeLink) => addRecipe(formData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.RECIPE.all }),
  });

  const onSubmit = handleSubmit((formData) => {
    mutate(formData);
    navigate(ROUTES.RECIPES);
  });

  return { register, isPending, onSubmit, errors };
};
