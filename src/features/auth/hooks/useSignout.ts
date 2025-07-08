import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { showToast } from '@/utils/toast';
import { SUCCESS_MESSAGES } from '@/constants/messages';
import { supabaseClient } from '@/lib/supabaseClient';
import { CustomError } from '@/lib/CustomError';
import { useQueryClient } from '@tanstack/react-query';
export const useSignout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signout = useCallback(async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      throw new CustomError(error.status ?? 400, error.message);
    }

    queryClient.clear();

    showToast.success(SUCCESS_MESSAGES.auth.signout);
    navigate(ROUTES.HOME);
  }, [navigate, queryClient]);

  return signout;
};
