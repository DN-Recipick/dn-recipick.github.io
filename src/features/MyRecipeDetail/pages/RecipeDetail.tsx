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

const RecipeDetail = () => {
  const { open } = useModalStore();
  const { id } = useParams();
  const { recipeItem, isPending } = useGetRecipeItem(id ?? '');

  if (!id) return <Navigate to={ROUTES.NOT_FOUND} />;
  if (isPending || !recipeItem) return <FullScreenLoader />;
  return (
    <PageLayout title={recipeItem?.name}>
      <p>{formatDateTime(recipeItem?.created_at)}</p>
      <YoutubeVideo id={recipeItem.video_id} />
      <h3 className="mt-5">{recipeItem?.title}</h3>
      <p>{recipeItem?.channel}</p>
      <RecipeProcedure procedure={recipeItem?.item} />
      <Ingredients ingredients={recipeItem?.ingredients} />
      <Button
        text="추천 레시피"
        className="btn-primary"
        onClick={() => open('relatedRecipes', { title: '추천 레시피', id: recipeItem.id })}
      />
    </PageLayout>
  );
};

export default RecipeDetail;
