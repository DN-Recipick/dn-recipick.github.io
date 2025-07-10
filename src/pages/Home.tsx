import Button from '@/components/shared/Button';
import { ROUTES } from '@/constants/routes';
import RecipeLinkForm from '@/features/RecipeLink/components/RecipeLinkForm';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="full-page-center">
      <div className="max-w-xl w-full">
        <h2 className="break-keep mb-4">영상 속 요리를 요약해 레시피로 보여드려요</h2>
        <RecipeLinkForm />
        <Link to={ROUTES.RECIPES}>
          <Button className="btn-primary w-full" text="저장된 레시피" />
        </Link>
      </div>
    </main>
  );
};

export default Home;
