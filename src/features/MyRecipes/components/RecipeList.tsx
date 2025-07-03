import EmptyState from '@/components/feedback/EmptyState';
import SkeletonRecipeItem from '@/components/feedback/Skeleton/SkeletonRecipeItem';
import type { Recipe } from '@/types/recipe';
import RecipeItem from '@/features/MyRecipes/components/RecipeItem';

const RecipeList = ({
  recipes,
  isPending,
}: {
  recipes: Recipe[] | undefined;
  isPending: boolean;
}) => {
  if (recipes?.length === 0) return <EmptyState text="저장된 레시피가 없습니다" />;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
      {isPending
        ? Array.from({ length: 6 }).map((_, idx) => <SkeletonRecipeItem key={idx} />)
        : recipes?.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)}
    </ul>
  );
};

export default RecipeList;
