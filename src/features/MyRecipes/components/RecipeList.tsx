import EmptyState from '@/components/feedback/empty/EmptyState';
import SkeletonRecipeItem from '@/components/feedback/skeleton/SkeletonRecipeItem';
import type { Recipe } from '@/types/recipe';
import RecipeItem from '@/features/MyRecipes/components/RecipeItem';
import { ErrorBoundary as ItemErrorBoundary } from 'react-error-boundary';
import { RecipeItemFallback } from '@/components/feedback/fallback/ItemFallback';

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
        : recipes?.map((recipe) => (
            <ItemErrorBoundary FallbackComponent={RecipeItemFallback} key={recipe.id}>
              <RecipeItem recipe={recipe} />
            </ItemErrorBoundary>
          ))}
    </ul>
  );
};

export default RecipeList;
