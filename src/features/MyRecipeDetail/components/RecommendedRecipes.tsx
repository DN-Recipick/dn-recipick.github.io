import Button from '@/components/shared/Button';
import useRecommendedRecipes from '@/features/MyRecipeDetail/hooks/useRecommendedRecipes';
import RecipeList from '@/features/MyRecipes/components/RecipeList';
import { useTab } from '@/hooks/useTab';
import clsx from 'clsx';
const TABS = ['메뉴관련 추천 레시피', '재료관련 추천 레시피'] as const;
type Tab = (typeof TABS)[number];

const RecommendedRecipes = ({ id }: { id: string }) => {
  const { selectedTab, setTab, isSelected } = useTab<Tab>('메뉴관련 추천 레시피');
  const { isPending, recommendedRecipesByIngredients, recommendedRecipesByMenu } =
    useRecommendedRecipes(id);
  return (
    <>
      <div className="pb-4 flex mx-auto justify-center w-full overflow-hidden gap-3">
        {TABS.map((tab) => (
          <Button
            key={tab}
            onClick={() => setTab(tab)}
            className={clsx(
              'text-sm sm:text-base md:text-[1.1rem] shadow-[var(--shadow)] rounded-md w-1/2 h-13 z-10 transition-colors duration-200 ',
              isSelected(tab) ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-200 text-black',
            )}
            text={tab}
          />
        ))}
      </div>
      <div>
        {selectedTab === '메뉴관련 추천 레시피' && (
          <RecipeList recipes={recommendedRecipesByMenu} isPending={isPending} />
        )}
        {selectedTab === '재료관련 추천 레시피' && (
          <RecipeList recipes={recommendedRecipesByIngredients} isPending={isPending} />
        )}
      </div>
    </>
  );
};

export default RecommendedRecipes;
