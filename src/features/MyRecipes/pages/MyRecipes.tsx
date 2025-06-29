import FullScreenLoader from '@/components/feedback/FullScreenLoader';
import Button from '@/components/shared/Button';
import { ROUTES } from '@/constants/routes';
import RecipeItem from '@/features/MyRecipes/components/RecipeItem';
import useGetRecipes from '@/features/MyRecipes/hooks/useGetRecipes';
import { Link } from 'react-router-dom';

const MyRecipes = () => {
  // const { data, isPending } = useGetRecipes();
  // console.log(data);

  // if (isPending) return <FullScreenLoader />;
  const recipes = {
    recipes: [
      {
        id: 'd38b54cd-3c13-4eb0-9ad1-b8101b83a4e9',
        item: [
          '1. 김치를 꺼내요',
          '2. 된장을 꺼내요',
          '3. 아무튼 물을 넣고 끓여요',
          '4. 접시에 담아요',
        ],
        name: '목데이터 레시피이름',
        state: 1,
        title: '목데이터 영상제목asdddddddddddddddddddddddddddddd',
        channel: '목데이터 영상채널',
        video_id: 'yy5IetkEZWI',
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
        saved_at: '2025-06-27T05:17:16.161+00:00',
      },
      {
        id: '39ef9ad2-4511-4c81-b090-7727d571d6b3',
        item: [
          '1. 김치를 꺼내요',
          '2. 된장을 꺼내요',
          '3. 아무튼 물을 넣고 끓여요',
          '4. 접시에 담아요',
        ],
        name: '목데이터 레시피이름',
        state: 1,
        title: '목데이터 영상제목',
        channel: '목데이터 영상채널',
        video_id: 'ru5IetkEZWI',
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
        saved_at: '2025-06-27T05:15:53.295+00:00',
      },
      {
        id: '4141a684-4ae2-4127-b43d-c3537bfc7190',
        item: [
          '1. 김치를 꺼내요',
          '2. 된장을 꺼내요',
          '3. 아무튼 물을 넣고 끓여요',
          '4. 접시에 담아요',
        ],
        name: '목데이터 레시피이름',
        state: 1,
        title: '목데이터 영상제목',
        channel: '목데이터 영상채널',
        video_id: '5eIJEBOFTog',
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
        saved_at: '2025-06-27T05:13:40.849+00:00',
      },
      {
        id: 'db8deb72-27b6-4a30-ae2f-a913538b5d8a',
        item: [
          '1. 김치를 꺼내요',
          '2. 된장을 꺼내요',
          '3. 아무튼 물을 넣고 끓여요',
          '4. 접시에 담아요',
        ],
        name: '목데이터 레시피이름',
        state: 1,
        title: '목데이터 영상제목',
        channel: '목데이터 영상채널',
        video_id: 'K1GBUzbsfNM',
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
        saved_at: '2025-06-27T04:25:48.182+00:00',
      },
    ],
    count: 4,
  };

  return (
    <>
      <div className="flex justify-between items-start gap-5">
        <h2>내 레시피</h2>
        <Link to={ROUTES.HOME}>
          <Button className="btn-primary" text="레시피 추가" />
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-stretch">
        {recipes.recipes?.map((recipe) => (
          <li key={recipe.id} className="h-full">
            <RecipeItem recipe={recipe} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyRecipes;
