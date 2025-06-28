import { SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { signup } from '@/features/auth/apis';
import type { SignupPayload } from '@/types/api';
import { showToast } from '@/utils/toast';
import { signupSchema, type SignupForm } from '@/validation/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  const { isPending, mutate } = useMutation({
    mutationFn: (formData: SignupPayload) => signup(formData),
    onSuccess: () => {
      showToast.success(SUCCESS_MESSAGES.auth.login);
      navigate(ROUTES.SIGNIN);
    },
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    mutate({ email, password });
  });

  return { register, isPending, onSubmit, errors };
};
