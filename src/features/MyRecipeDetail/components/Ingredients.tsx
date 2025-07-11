import EmptyState from '@/components/feedback/empty/EmptyState';
import Button from '@/components/shared/Button';
import SectionLayout from '@/components/shared/SectionLayout';
import { useModalStore } from '@/store/useModalStore';
import type { Ingredient } from '@/types/recipe';

const Ingredients = ({ ingredients }: { ingredients: Ingredient[] }) => {
  const { open } = useModalStore();
  return (
    <SectionLayout title="재료">
      {ingredients.length === 0 && <EmptyState text="재료가 없습니다" />}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {ingredients.map(({ name, amount }) => (
          <li
            key={name}
            className="flex-column justify-between p-4 rounded-lg bg-[var(--color-card-bg)] shadow-[var(--shadow)]"
          >
            <div>
              <p>{name}</p>
              {amount && <p className="text-sm text-[var(--color-sub-text)] mt-1.5">{amount}</p>}
            </div>
            <Button
              className="btn-kurly w-full mt-2.5"
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
