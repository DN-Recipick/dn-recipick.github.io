import FullScreenLoader from '@/components/feedback/FullScreenLoader';
import { ROUTES } from '@/constants/routes';
import Ingredients from '@/features/MyRecipeDetail/components/Ingredients';
import RecipeProcedure from '@/features/MyRecipeDetail/components/RecipeProcedure';
import useGetRecipeItem from '@/features/MyRecipeDetail/hooks/useGetRecipeItem';
import { Navigate, useParams } from 'react-router-dom';
import { formatDateTime } from '@/utils/format';
import YoutubeVideo from '@/components/shared/YoutubeVideo';

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipeItem, isPending } = useGetRecipeItem(id ?? '');

  if (!id) return <Navigate to={ROUTES.NOT_FOUND} />;
  if (isPending || !recipeItem) return <FullScreenLoader />;
  return (
    <div>
      <h2>{recipeItem?.name}</h2>
      <p>{formatDateTime(recipeItem?.created_at)}</p>
      <YoutubeVideo id={recipeItem.video_id} />
      <h3 className="mt-5">{recipeItem?.title}</h3>
      <p>{recipeItem?.channel}</p>
      <RecipeProcedure procedure={recipeItem?.item} />
      <Ingredients ingredients={recipeItem?.ingredients} />
    </div>
  );
};

export default RecipeDetail;
