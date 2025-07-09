import Button from '@/components/shared/Button';
import { ROUTES } from '@/constants/routes';
import RecipeList from '@/features/MyRecipes/components/RecipeList';
import useGetRecipes from '@/features/MyRecipes/hooks/useGetRecipes';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';
import PageLayout from '@/components/shared/PageLayout';

const MyRecipes = () => {
  const { recipes, isPending } = useGetRecipes();

  return (
    <PageLayout title="내 레시피">
      <RecipeList isPending={isPending} recipes={recipes} />
      <div className="fixed bottom-23 w-full layout-max-w px-content left-1/2 -translate-x-1/2 z-10 flex justify-end">
        <Link to={ROUTES.HOME}>
          <Button
            icon={<FaPlus className="mini-icon-size" />}
            className="btn-primary w-14 h-14 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </Link>
      </div>
    </PageLayout>
  );
};

export default MyRecipes;
