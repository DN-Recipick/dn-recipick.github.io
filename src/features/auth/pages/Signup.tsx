import PageLayout from '@/components/shared/PageLayout';
import SignupForm from '@/features/auth/components/SignupForm';
import useGetUser from '@/features/auth/hooks/useGetUser';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './../../../constants/routes';

const Signup = () => {
  const { isSignedIn, isPending } = useGetUser();

  if (isPending) return null;

  if (isSignedIn) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <PageLayout title="회원가입">
      <SignupForm />
    </PageLayout>
  );
};

export default Signup;
