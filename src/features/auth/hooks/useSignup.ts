import { SUCCESS_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { signup } from '@/features/auth/apis';
import useSetFormFocus from '@/features/MyRecipes/hooks/useSetFormFocus';
import type { SignupPayload, SignupFormType } from '@/types/auth';
import { showToast } from '@/utils/toast';
import { signupSchema } from '@/validation/auth.schema';
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
    setFocus,
    clearErrors,
  } = useForm<SignupFormType>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  useSetFormFocus({ setFocus, clearErrors, focusName: 'email' });

  const { isPending, mutate } = useMutation({
    mutationFn: (formData: SignupPayload) => signup(formData),
    onSuccess: () => {
      showToast.success(SUCCESS_MESSAGES.auth.signup);
      navigate(ROUTES.HOME);
    },
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    mutate({ email, password });
  });

  return { register, isPending, onSubmit, errors };
};
