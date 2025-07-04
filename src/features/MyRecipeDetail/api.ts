import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { KurlyItemResponse } from '@/types/kurly';
import type { RecipeItemResponse, RecommendedRecipesResponse } from '@/types/recipe';
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

const mockRecipeItem: RecipeItemResponse = {
  id: '39ef9ad2-4511-4c81-b090-7727d571d6b3',
  created_at: '2025-06-27T05:15:53.289034+00:00',
  video_id: 'ru5IetkEZWI',
  name: '목데이터 레시피이름',
  title: '목데이터 영상제목',
  channel: '목데이터 영상채널',
  item: ['1. 김치를 꺼내요', '2. 된장을 꺼내요', '3. 아무튼 물을 넣고 끓여요', '4. 접시에 담아요'],
  ingredients: [
    { name: '김치', amount: '한포기' },
    { name: '된장', amount: '100g' },
    { name: '시래기', amount: '한단' },
  ],
  state: 1,
};

export const MOCK_KURLY_ITEMS = {
  result: [
    {
      no: '5054657',
      name: '[KF365] 다다기오이 3입',
      price: '2990',
      imageUrl:
        'https://product-image.kurly.com/product/image/6f75bf79-4b78-4d64-8691-dd6a577e78d6.jpeg',
    },
    {
      no: '5000333',
      name: '친환경 오이 2입',
      price: '3290',
      imageUrl: 'https://img-cf.kurly.com/shop/data/goods/1648208836561l0.jpeg',
    },
    {
      no: '1001201283',
      name: '천안 아우내 오이 5입',
      price: '4990',
      imageUrl:
        'https://product-image.kurly.com/product/image/9f75b592-aa60-4411-8880-7bda924fb279.jpg',
    },
    {
      no: '1000165817',
      name: '미니오이 5입',
      price: '3290',
      imageUrl:
        'https://product-image.kurly.com/product/image/74b5445b-7cd4-4420-8d91-14b3c78ef0da.jpg',
    },
    {
      no: '5051479',
      name: '오이지용 오이 20입',
      price: '14900',
      imageUrl: 'https://img-cf.kurly.com/shop/data/goods/1653038050409l0.jpg',
    },
  ],
};

export const getKurlyItems = async (keyword: string): Promise<KurlyItemResponse> => {
  if (USE_MOCK) {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_KURLY_ITEMS), 300));
  }

  return httpClient.get(ENDPOINTS.INGREDIENT, {
    queryParams: { keyword },
    withAuth: true,
  });
};

export const getRecipeItem = (id: string): Promise<RecipeItemResponse> => {
  if (USE_MOCK) {
    return new Promise((resolve) => setTimeout(() => resolve(mockRecipeItem), 300));
  }

  return httpClient.get(ENDPOINTS.RECIPE.ITEM(id), {
    withAuth: true,
  });
};

export const getRecommendedRecipes = (id: string): Promise<RecommendedRecipesResponse> => {
  // if (USE_MOCK) {
  //   return new Promise((resolve) => setTimeout(() => resolve(mockRecipeItem), 300));
  // }

  return httpClient.get(ENDPOINTS.RECIPE.RECOMMENDED(id), {
    withAuth: true,
  });
};
