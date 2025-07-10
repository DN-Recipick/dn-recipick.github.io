import RecipeList from '@/features/MyRecipes/components/RecipeList';
import useGetRecipes from '@/features/MyRecipes/hooks/useGetRecipes';
import PageLayout from '@/components/shared/PageLayout';
import RealTimeOverlay from '@/features/MyRecipes/components/RealTimeOverlay';

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
