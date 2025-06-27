import { CustomError } from '@/lib/errors';
import { showToast } from '@/utils/toast';
import { useFallbackStore } from '@/store/useFallbackStore';

export const handleAppError = (error: unknown) => {
  const { show } = useFallbackStore.getState();

  if (!(error instanceof CustomError)) {
    return show('알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }

  const { status, message, rawMessage } = error;

  if (!status || status >= 500 || status === 401) {
    return show(message, rawMessage, status);
  }

  return showToast.error(message);
};
