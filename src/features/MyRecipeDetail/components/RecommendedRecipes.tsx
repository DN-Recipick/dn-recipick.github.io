import useRecommendedRecipes from '@/features/MyRecipeDetail/hooks/useRecommendedRecipes';
import RecipeList from '@/features/MyRecipes/components/RecipeList';

const RecommendedRecipes = ({ id }: { id: string }) => {
  const { isPending, recommendedRecipesByIngredients, recommendedRecipesByMenu } =
    useRecommendedRecipes(id);
  return (
    <>
      <section className="py-5">
        <h3>메뉴 관련 추천 레시피</h3>
        <RecipeList recipes={recommendedRecipesByMenu} isPending={isPending} />
      </section>
      <section className="py-5">
        <h3>재료 관련 추천 레시피</h3>
        <RecipeList recipes={recommendedRecipesByIngredients} isPending={isPending} />
      </section>
    </>
  );
};

export default RecommendedRecipes;
