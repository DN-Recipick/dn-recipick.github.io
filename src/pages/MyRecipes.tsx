import useGetRecipes from '@/features/recipes/hooks/useGetRecipes';
import PageLayout from '@/components/layout/PageLayout';
import RealTimeOverlay from '@/features/recipes/components/RealTimeOverlay';
import RecipeList from '@/features/recipes/components/RecipeList';

const MyRecipes = () => {
  const { recipes, isPending, isRealTimePending } = useGetRecipes();

  return (
    <PageLayout title="저장된 레시피">
      {isRealTimePending && <RealTimeOverlay />}
      <RecipeList isPending={isPending} recipes={recipes} />
    </PageLayout>
  );
};

export default MyRecipes;
