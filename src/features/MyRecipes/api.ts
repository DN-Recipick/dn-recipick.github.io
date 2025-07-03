// getRecipes.ts

import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { RecipeListResponse } from '@/types/recipe';

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

const mockData: RecipeListResponse = {
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
      title: '목데이터 영상제목',
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
    {
      id: 'db8deb72-27b6-4a30-ae2f-a913538b5d8a1',
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
    {
      id: 'db8deb72-27b6-4a30-ae2f-a913538b5d8a12',
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

export const getRecipes = (): Promise<RecipeListResponse> => {
  if (USE_MOCK) {
    return new Promise((resolve) => setTimeout(() => resolve(mockData), 300));
  }

  return httpClient.get(ENDPOINTS.RECIPE.LIST, { withAuth: true });
};
