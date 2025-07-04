import Button from '@/components/shared/Button';
import SectionLayout from '@/components/shared/SectionLayout';
import { useModalStore } from '@/store/useModalStore';
import type { Ingredient } from '@/types/recipe';

const Ingredients = ({ ingredients }: { ingredients: Ingredient[] }) => {
  const { open } = useModalStore();
  return (
    <SectionLayout title="재료">
      <ul className="flex-column gap-3">
        {ingredients.map(({ name, amount }) => (
          <li
            key={name}
            className="flex-center-between px-4 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-[var(--shadow)] border border-gray-100 dark:border-gray-700"
          >
            <div>
              <p>{name}</p>
              {amount && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{amount}</p>
              )}
            </div>
            <Button
              className="btn-kurly"
              text="컬리에서 구매"
              onClick={() =>
                open('ingredient', { title: '컬리에서 구매', ingredientKeyword: name })
              }
            />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default Ingredients;
