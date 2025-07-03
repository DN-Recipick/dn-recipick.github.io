import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { showToast } from '@/utils/toast';
import { SUCCESS_MESSAGES } from '@/constants/messages';
import { resetAuthState } from './../../../utils/auth';

export const useSignout = () => {
  const navigate = useNavigate();

  const signout = useCallback(() => {
    resetAuthState();
    showToast.success(SUCCESS_MESSAGES.auth.signout);
    navigate(ROUTES.HOME);
  }, [navigate]);

  return signout;
};
