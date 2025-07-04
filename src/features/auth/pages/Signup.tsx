import PageLayout from '@/components/shared/PageLayout';
import SignupForm from '@/features/auth/components/SignupForm';

const Signup = () => {
  return (
    <PageLayout title="회원가입">
      <SignupForm />
    </PageLayout>
  );
};

export default Signup;
