import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { useSignup } from '@/features/auth/hooks/useSignup';

const SignupForm = () => {
  const { isPending, onSubmit, errors, register } = useSignup();
  return (
    <>
      <h3 className="mb-5.5">회원가입</h3>
      <form onSubmit={onSubmit}>
        <Input
          wrapClassname="my-3"
          className="main-input"
          placeholder="이메일 주소를 입력하세요"
          label="이메일"
          error={errors.email?.message}
          type="email"
          {...register('email')}
          required
        />
        <Input
          wrapClassname="my-3"
          className="main-input"
          placeholder="6자 이상 입력하세요"
          label="비밀번호"
          error={errors.password?.message}
          type="password"
          {...register('password')}
          required
        />
        <Input
          wrapClassname="my-3"
          className="main-input"
          placeholder="비밀번호를 다시 입력하세요"
          label="비밀번호 확인"
          error={errors.passwordCheck?.message}
          type="password"
          {...register('passwordCheck')}
          required
        />
        <Button
          text="회원가입"
          type="submit"
          isPending={isPending}
          className="btn-primary w-full"
        />
      </form>
    </>
  );
};

export default SignupForm;
