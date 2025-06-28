import type { Ingredient } from '@/types/recipe';

const Ingredients = ({ ingredients }: { ingredients: Ingredient[] }) => {
  return (
    <ul className="flex-1 px-content space-y-3">
      {ingredients.map((ingredient) => (
        <li key={ingredient.name} className="flex justify-between items-center border-b pb-1">
          <span className="text-base font-medium ">{ingredient.name}</span>
          <span className="text-sm ">{ingredient.amount}</span>
        </li>
      ))}
    </ul>
  );
};

export default Ingredients;
