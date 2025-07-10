import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import { useSignin } from '@/features/auth/hooks/useSignIn';

const SigninForm = () => {
  const { isPending, errors, onSubmit, register } = useSignin();

  return (
    <>
      <h3 className="mb-5.5">로그인</h3>
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
          placeholder="6자 이상 입력하세요"
          className="main-input"
          label="비밀번호"
          error={errors.password?.message}
          type="password"
          {...register('password')}
          required
        />
        <Button text="로그인" type="submit" isPending={isPending} className="btn-primary w-full" />
      </form>
    </>
  );
};

export default SigninForm;
