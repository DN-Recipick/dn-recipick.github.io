import { SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { signin } from '@/features/auth/apis';
import type { SigninFormType } from '@/types/auth';
import { showToast } from '@/utils/toast';
import { signinSchema } from '@/validation/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useSignin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signinSchema),
    mode: 'onBlur',
  });

  const { isPending, mutate } = useMutation({
    mutationFn: (formData: SigninFormType) => signin(formData),
    onSuccess: () => {
      queryClient.clear();
      showToast.success(SUCCESS_MESSAGES.auth.signin);
      navigate(ROUTES.HOME);
    },
  });

  const onSubmit = handleSubmit((formData) => mutate(formData));

  return { register, isPending, onSubmit, errors };
};
