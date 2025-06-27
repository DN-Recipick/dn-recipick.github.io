import AuthLayout from '@/features/auth/AuthLayout';
import SigninForm from '@/features/auth/components/SigninForm';

const Signin = () => {
  return (
    <AuthLayout title="로그인">
      <SigninForm />
    </AuthLayout>
  );
};

export default Signin;
