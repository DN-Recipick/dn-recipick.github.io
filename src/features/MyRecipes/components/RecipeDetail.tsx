import Ingredients from '@/features/MyRecipes/components/Ingredients';
import { useLocation } from 'react-router-dom';
import type { Recipe } from '@/types/recipe';

const RecipeDetail = () => {
  const { state } = useLocation();
  const recipe = state?.recipe as Recipe;
  console.log(recipe.item);
  console.log(recipe.ingredients);

  return (
    <div>
      <h2>{recipe.name}</h2>
      <div className="flex">
        <div className="bg-amber-800 h-80 max-w-200 w-full" />
        <Ingredients ingredients={recipe.ingredients} />
      </div>
    </div>
  );
};

export default RecipeDetail;
