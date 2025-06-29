import Ingredients from '@/features/MyRecipeDetail/components/Ingredients';
import { useLocation } from 'react-router-dom';
import type { Recipe } from '@/types/recipe';
import RecipeProcedure from '@/features/MyRecipeDetail/components/RecipeProcedure';

const RecipeDetail = () => {
  const { state } = useLocation();
  const recipe = state?.recipe as Recipe;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <div className="bg-amber-800 h-80 max-w-200 w-full rounded-md" />
      <h3 className="mt-5">{recipe.title}</h3>
      <p>{recipe.channel}</p>
      <Ingredients ingredients={recipe.ingredients} />
      <RecipeProcedure procedure={recipe.item} />
    </div>
  );
};

export default RecipeDetail;
