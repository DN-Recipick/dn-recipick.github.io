import { addRecipe } from '@/features/RecipeLink/api';
import { recipeLinkScheme, type RecipeLink } from '@/validation/recipeLink.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export const useLinkRecipe = () => {
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
    console.log(formData);
    mutate(formData);
  });

  return { register, isPending, onSubmit, errors };
};
