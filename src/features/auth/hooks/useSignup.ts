import { signup } from '@/features/apis';
import { signupSchema, type SignupForm } from '@/validation/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export const useSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  const { isPending, mutate } = useMutation({
    mutationFn: (formData: SignupForm) => signup(formData),
  });

  const onSubmit = handleSubmit((formData) => mutate(formData));

  return { register, isPending, onSubmit, errors };
};
