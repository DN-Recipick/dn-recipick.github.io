import { CustomError } from '@/lib/CustomError';
import { showToast } from '@/utils/toast';
import { useFallbackStore } from '@/store/useFallbackStore';
import { ROUTES } from '@/constants/routes';
import { supabaseClient } from '@/lib/supabaseClient';
import { customQueryClient } from '@/lib/queryClient';
//TODO : 에러 메세지 통한 토스트 메세지 추가
//TODO : 전체 디렉토리 구조 조정

export const handleAppError = async (error: unknown) => {
  const { show } = useFallbackStore.getState();

  if (!(error instanceof CustomError)) {
    throw error;
  }

  const { status, message, rawMessage } = error;

  if (status === 401) {
    await supabaseClient.auth.signOut();
    customQueryClient.clear();
    showToast.error('로그인이 필요한 서비스입니다');

    setTimeout(() => {
      window.location.href = ROUTES.SIGNIN;
    }, 400);
    return;
  }

  if (!status || status >= 500) {
    return show(message, rawMessage, status);
  }

  return showToast.error(message);
};
