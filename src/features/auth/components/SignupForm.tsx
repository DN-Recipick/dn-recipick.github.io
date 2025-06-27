import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { useSignup } from '@/features/auth/hooks/useSignup';

const SignupForm = () => {
  const { isPending, onSubmit, errors, register } = useSignup();
  return (
    <form onSubmit={onSubmit}>
      <Input
        wrapClassname="my-2"
        className="main-input"
        label="이메일"
        error={errors.email?.message}
        type="email"
        {...register('email')}
        required
      />
      <Input
        wrapClassname="my-2"
        className="main-input"
        label="비밀번호"
        error={errors.password?.message}
        type="password"
        {...register('password')}
        required
      />
      <Input
        wrapClassname="my-2"
        className="main-input"
        label="비밀번호 확인"
        error={errors.passwordCheck?.message}
        type="password"
        {...register('passwordCheck')}
        required
      />
      <Button type="submit" isPending={isPending} className="btn-primary w-full">
        회원가입
      </Button>
    </form>
  );
};

export default SignupForm;
