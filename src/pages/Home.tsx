import Button from '@/components/shared/Button';
import { ROUTES } from '@/constants/routes';
import RecipeLinkForm from '@/features/RecipeLink/components/RecipeLinkForm';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="full-page-center">
      <div className="max-w-xl w-full">
        <h2>영상으로 쉽게 레시피를 알아보세요</h2>
        <RecipeLinkForm />
        <Link to={ROUTES.RECIPES}>
          <Button className="btn-primary w-full" text="내 레시피" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
