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
  // const { recipeItem, isPending } = useGetRecipeItem(id ?? '');

  // if (!id) return <Navigate to={ROUTES.NOT_FOUND} />;
  // if (isPending || !recipeItem) return <FullScreenLoader />;
  const recipeItem = {
    id: '39ef9ad2-4511-4c81-b090-7727d571d6b3',
    created_at: '2025-06-27T05:15:53.289034+00:00',
    video_id: 'ru5IetkEZWI',
    name: '목데이터 레시피이름',
    title: '목데이터 영상제목',
    channel: '목데이터 영상채널',
    item: [
      '1. 김치를 꺼내요',
      '2. 된장을 꺼내요',
      '3. 아무튼 물을 넣고 끓여요',
      '4. 접시에 담아요',
    ],
    ingredients: [
      {
        name: '김치',
        amount: '한포기',
      },
      {
        name: '된장',
        amount: '100g',
      },
      {
        name: '시래기',
        amount: '한단',
      },
    ],
    state: 1,
  };
  return (
    <div>
      <h2>{recipeItem?.name}</h2>
      <YoutubeVideo id={recipeItem.video_id} />
      <h3 className="mt-5">{recipeItem?.title}</h3>
      <p>{recipeItem?.channel}</p>
      <p>{formatDateTime(recipeItem?.created_at)}</p>
      <Ingredients ingredients={recipeItem?.ingredients} />
      <RecipeProcedure procedure={recipeItem?.item} />
    </div>
  );
};

export default RecipeDetail;
