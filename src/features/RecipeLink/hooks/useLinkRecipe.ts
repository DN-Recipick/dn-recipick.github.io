import { ROUTES } from '@/constants/routes';
import { addRecipe } from '@/features/RecipeLink/api';
import { recipeLinkScheme, type RecipeLink } from '@/validation/recipeLink.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useLinkRecipe = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeLink>({
    resolver: zodResolver(recipeLinkScheme),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: (formData: RecipeLink) => addRecipe(formData),
  });

  const onSubmit = handleSubmit((formData) => {
    mutate(formData);
    navigate(ROUTES.RECIPES);
  });

  return { register, isPending, onSubmit, errors };
};
