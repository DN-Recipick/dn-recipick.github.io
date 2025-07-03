import { CustomError } from '@/lib/CustomError';
import { showToast } from '@/utils/toast';
import { useFallbackStore } from '@/store/useFallbackStore';
import { resetAuthState } from '@/utils/auth';
import { ROUTES } from '@/constants/routes';

export const handleAppError = (error: unknown) => {
  const { show } = useFallbackStore.getState();

  if (!(error instanceof CustomError)) {
    throw error;
  }

  const { status, message, rawMessage } = error;

  if (status === 401) {
    resetAuthState();
    window.location.href = ROUTES.SIGNIN;
    return;
  }

  if (!status || status >= 500) {
    return show(message, rawMessage, status);
  }

  return showToast.error(message);
};
