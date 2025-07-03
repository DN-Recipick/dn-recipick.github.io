import Button from '@/components/shared/Button';
import { ROUTES } from '@/constants/routes';
import RecipeList from '@/features/MyRecipes/components/RecipeList';
import useGetRecipes from '@/features/MyRecipes/hooks/useGetRecipes';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';
const MyRecipes = () => {
  const { data, isPending } = useGetRecipes();

  return (
    <>
      <h2>내 레시피</h2>
      <RecipeList isPending={isPending} recipes={data?.recipes} />
      <div className="fixed bottom-23 w-full layout-max-w px-4 left-1/2 -translate-x-1/2 z-50 flex justify-end">
        <Link to={ROUTES.HOME}>
          <Button className="btn-primary w-14 h-14 rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200">
            <FaPlus />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MyRecipes;
