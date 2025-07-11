import EmptyState from '@/components/feedback/empty/EmptyState';
import type { Recipe } from '@/types/recipe';
import RecipeItem from '@/features/MyRecipes/components/RecipeItem';
import { ErrorBoundary as ItemErrorBoundary } from 'react-error-boundary';
import { RecipeItemFallback } from '@/components/feedback/fallback/ItemFallback';
import SkeletonRecipeItem from '@/components/feedback/skeleton/SkeletonRecipeItem';

const RecipeList = ({
  recipes,
  isPending,
}: {
  recipes: Recipe[] | undefined;
  isPending: boolean;
}) => {
  if (recipes?.length === 0) return <EmptyState text="저장된 레시피가 없습니다" />;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
      {isPending
        ? [...Array(4)].map((_, idx) => <SkeletonRecipeItem key={idx} />)
        : recipes?.map((recipe) => (
            <ItemErrorBoundary FallbackComponent={RecipeItemFallback} key={recipe.id}>
              <RecipeItem recipe={recipe} />
            </ItemErrorBoundary>
          ))}
    </ul>
  );
};

export default RecipeList;
