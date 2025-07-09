import PageLayout from '@/components/shared/PageLayout';
import { ROUTES } from '@/constants/routes';
import SigninForm from '@/features/auth/components/SigninForm';
import useGetUser from '@/features/auth/hooks/useGetUser';
import { Navigate } from 'react-router-dom';

const Signin = () => {
  const { isSignedIn, isPending } = useGetUser();

  if (isPending) return null;

  if (isSignedIn) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <PageLayout title="로그인">
      <SigninForm />
    </PageLayout>
  );
};

export default Signin;
