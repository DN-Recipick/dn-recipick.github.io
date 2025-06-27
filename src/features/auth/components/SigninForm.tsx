import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import { useSignin } from '@/features/auth/hooks/useSignIn';

const SigninForm = () => {
  const { isPending, errors, onSubmit, register } = useSignin();

  return (
    <form onSubmit={onSubmit}>
      <Input
        label="이메일"
        error={errors.email?.message}
        type="email"
        {...register('email')}
        required
      />
      <Input
        label="비밀번호"
        error={errors.password?.message}
        type="password"
        {...register('password')}
        required
      />
      <Button type="submit" isPending={isPending} className="btn-primary w-full">
        로그인
      </Button>
    </form>
  );
};

export default SigninForm;
