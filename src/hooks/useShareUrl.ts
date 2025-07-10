import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { addRecipe } from '@/features/RecipeLink/api';
import { ROUTES } from '@/constants/routes';
import { CustomError } from '@/lib/CustomError';
import { showToast } from '@/utils/toast';

export const useShareUrl = () => {
  const [searchParams] = useSearchParams();
  const sharedUrl = searchParams.get('url');
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (url: string) => addRecipe({ url }),
    onSuccess: () => {
      console.log('success');
      navigate(ROUTES.RECIPES, {
        replace: true,
        state: { fromSharedLink: true },
      });
    },
    onError: (error) => {
      console.log('error', error);

      const { status, message } = error as CustomError;

      const isUnauthorized = status === 401;

      showToast.error(
        isUnauthorized ? '로그인이 필요합니다.' : message || '레시피 등록 중 오류가 발생했습니다.',
      );

      navigate(ROUTES.HOME, { replace: true });
    },
  });

  useEffect(() => {
    if (sharedUrl) {
      console.log('내부 실행');
      mutate(sharedUrl);
    }
  }, [sharedUrl, mutate]);
};
