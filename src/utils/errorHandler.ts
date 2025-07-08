import { CustomError } from '@/lib/CustomError';
import { showToast } from '@/utils/toast';
import { useFallbackStore } from '@/store/useFallbackStore';
import { ROUTES } from '@/constants/routes';
import { supabaseClient } from '@/lib/supabaseClient';
import { customQueryClient } from '@/lib/queryClient';
//TODO : 에러 처리 로직 수정
//TODO : 스켈레톤 사이즈 수정 반복문 재사용성 고려
//TODO : 컬리 모달 및 레시피 상세 스켈레톤 추가
//TODO : 전체 디렉토리 구조 조정
//TODO : 헤더 리렌더링 관련 수정, 헤더 스켈레톤? 추가 고려
//TODO : getUser 에러 처리
//TODO : 수파베이스 인증 에러 처리!
//TODO : ui 다듬기
//TODO : 에러 핸들러 spa 방식으로 리다이렉트?
//TODO : 로그인, 회원가입 focus 추가

export const handleAppError = async (error: unknown) => {
  const { show } = useFallbackStore.getState();

  if (!(error instanceof CustomError)) {
    throw error;
  }

  const { status, message, rawMessage } = error;

  if (status === 401) {
    await supabaseClient.auth.signOut();
    customQueryClient.clear();
    window.location.href = ROUTES.SIGNIN;
    return;
  }

  if (!status || status >= 500) {
    return show(message, rawMessage, status);
  }

  return showToast.error(message);
};
