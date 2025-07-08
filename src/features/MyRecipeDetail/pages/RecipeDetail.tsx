import FullScreenLoader from '@/components/feedback/loading/FullScreenLoader';
import { ROUTES } from '@/constants/routes';
import Ingredients from '@/features/MyRecipeDetail/components/Ingredients';
import RecipeProcedure from '@/features/MyRecipeDetail/components/RecipeProcedure';
import useGetRecipeItem from '@/features/MyRecipeDetail/hooks/useGetRecipeItem';
import { Navigate, useParams } from 'react-router-dom';
import { formatDateTime } from '@/utils/format';
import YoutubeVideo from '@/components/shared/YoutubeVideo';
import Button from '@/components/shared/Button';
import { useModalStore } from '@/store/useModalStore';
import PageLayout from '@/components/shared/PageLayout';
import ChannelInfo from '@/features/MyRecipeDetail/components/ChannelInfo';
import { useAddExternalRecipe } from '@/features/MyRecipeDetail/hooks/useAddExternalRecipe';

const RecipeDetail = () => {
  const { open } = useModalStore();
  const { id } = useParams();
  const { recipeItem, isPendingRecipeItem } = useGetRecipeItem(id ?? '');
  const { addRecipe, isPendingAddRecipe } = useAddExternalRecipe();

  if (!id) return <Navigate to={ROUTES.NOT_FOUND} />;
  if (isPendingRecipeItem || !recipeItem) return <FullScreenLoader />;

  return (
    <PageLayout title={recipeItem.name}>
      <p className="date-text mb-3">저장일 : {formatDateTime(recipeItem.created_at)}</p>
      <YoutubeVideo id={recipeItem.video_id} />
      <ChannelInfo
        videoId={recipeItem.video_id}
        channelName={recipeItem.channel}
        channelTitle={recipeItem.title}
      />
      <RecipeProcedure procedure={recipeItem.item} />
      <Ingredients ingredients={recipeItem.ingredients} />
      <Button
        text="추천 레시피 보기"
        className="btn-primary w-full mt-4"
        onClick={() => open('recommendRecipes', { title: '추천 레시피', id: recipeItem.id })}
      />
      {!recipeItem.is_mine && (
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
