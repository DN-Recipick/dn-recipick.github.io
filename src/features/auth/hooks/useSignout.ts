import { useCallback } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export const useSignout = () => {
  const clearUser = useAuthStore((s) => s.clearUser);
  const navigate = useNavigate();

  const signout = useCallback(() => {
    localStorage.removeItem('token');
    clearUser();
    navigate(ROUTES.HOME);
  }, [clearUser, navigate]);

  return signout;
};
