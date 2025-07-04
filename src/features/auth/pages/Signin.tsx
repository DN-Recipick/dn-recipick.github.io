import PageLayout from '@/components/shared/PageLayout';
import SigninForm from '@/features/auth/components/SigninForm';

const Signin = () => {
  return (
    <PageLayout title="로그인">
      <SigninForm />
    </PageLayout>
  );
};

export default Signin;
