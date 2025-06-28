import { SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { signin } from '@/features/auth/apis';
import { useAuthStore } from '@/store/useAuthStore';
import type { SigninResponse } from '@/types/api';
import { showToast } from '@/utils/toast';
import { signinSchema, type SigninForm } from '@/validation/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useSignin = () => {
  const queryClient = useQueryClient();
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signinSchema),
    mode: 'onBlur',
  });

  const { isPending, mutate } = useMutation({
    mutationFn: (formData: SigninForm) => signin(formData),
    onSuccess: (res: SigninResponse) => {
      localStorage.setItem('token', res?.access_token);
      setUser(res.user);
      queryClient.clear();
      showToast.success(SUCCESS_MESSAGES.auth.login);
      navigate(ROUTES.HOME);
    },
  });

  const onSubmit = handleSubmit((formData) => mutate(formData));

  return { register, isPending, onSubmit, errors };
};
