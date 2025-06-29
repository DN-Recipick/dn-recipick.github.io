import Button from '@/components/shared/Button';
import SectionLayout from '@/components/shared/SectionLayout';
import { useModalStore } from '@/store/useModalStore';
import type { Ingredient } from '@/types/recipe';

const Ingredients = ({ ingredients }: { ingredients: Ingredient[] }) => {
  const { open } = useModalStore();
  return (
    <>
      <SectionLayout title="재료">
        <ul className="flex-1 space-y-3">
          {ingredients.map(({ name, amount }) => (
            <li key={name} className="flex justify-between items-center border-b pb-1">
              <span className="text-base font-medium ">{name}</span>
              <div className="flex-center-between gap-3">
                <span className="text-sm ">{amount}</span>
                <Button
                  className="btn-primary"
                  text="컬리에서 구매"
                  onClick={() =>
                    open('ingredient', { title: '컬리에서 구매', ingredientKeyword: name })
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </SectionLayout>
    </>
  );
};

export default Ingredients;
