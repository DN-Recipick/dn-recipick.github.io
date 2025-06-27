import AuthLayout from '@/features/auth/AuthLayout';
import SignupForm from '@/features/auth/components/SignupForm';

const Signup = () => {
  return (
    <AuthLayout title="회원가입">
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
