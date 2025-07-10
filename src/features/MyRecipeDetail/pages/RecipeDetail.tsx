import { ROUTES } from '@/constants/routes';
import Ingredients from '@/features/MyRecipeDetail/components/Ingredients';
import RecipeProcedure from '@/features/MyRecipeDetail/components/RecipeProcedure';
import useGetRecipeItem from '@/features/MyRecipeDetail/hooks/useGetRecipeItem';
import { Navigate, useParams } from 'react-router-dom';
import YoutubeVideo from '@/components/shared/YoutubeVideo';
import Button from '@/components/shared/Button';
import { useModalStore } from '@/store/useModalStore';
import PageLayout from '@/components/shared/PageLayout';
import { useAddExternalRecipe } from '@/features/MyRecipeDetail/hooks/useAddExternalRecipe';
import SkeletonRecipeDetail from '@/components/feedback/skeleton/SkeletonRecipeDetail';

const RecipeDetail = () => {
  const { open } = useModalStore();
  const { id } = useParams();
  const { recipeItem, isPendingRecipeItem } = useGetRecipeItem(id ?? '');
  const { addRecipe, isPendingAddRecipe } = useAddExternalRecipe();

  if (!id) return <Navigate to={ROUTES.NOT_FOUND} />;
  if (isPendingRecipeItem || !recipeItem) {
    return (
      <PageLayout title="레시피">
        <SkeletonRecipeDetail />
      </PageLayout>
    );
  }

  return (
    <PageLayout title={'레시피'}>
      <div className="mb-3 line-clamp-1 flex items-center gap-2">
        <span className="text-2xl font-extrabold whitespace-nowrap">{recipeItem.name}</span>
        <span className="text-[var(--color-sub-text)] text-sm whitespace-nowrap">
          by {recipeItem.channel}
        </span>
      </div>

      <p className="text-gray-400 mb-2 ">{recipeItem.title}</p>
      {/* <p className="date-text mb-3">저장일 : {formatDateTime(recipeItem.created_at)}</p> */}
      <YoutubeVideo id={recipeItem.video_id} />
      <RecipeProcedure procedure={recipeItem.item} />
      <Ingredients ingredients={recipeItem.ingredients} />
      {recipeItem.is_mine ? (
        <Button
          text="추천 레시피 보기"
          className="btn-primary w-full mt-4"
          onClick={() => open('recommendRecipes', { title: '추천 레시피', id: recipeItem.id })}
        />
      ) : (
        <Button
          text="내 레시피에 추가"
          className="btn-primary w-full mt-4"
          onClick={() => addRecipe(recipeItem.id)}
          isPending={isPendingAddRecipe}
        />
      )}
    </PageLayout>
  );
};

export default RecipeDetail;
