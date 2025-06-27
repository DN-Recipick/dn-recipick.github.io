import { useEffect } from 'react';
import type { UseQueryResult } from '@tanstack/react-query';
import { CustomError } from '@/lib/errors';
import { handleAppError } from '@/utils/errorHandler';

interface UseQueryEffectOptions<T> {
  queryResult: UseQueryResult<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: CustomError) => void;
}

export function useQueryEffect<T>({ queryResult, onSuccess, onError }: UseQueryEffectOptions<T>) {
  const { data, isError, error } = queryResult;

  useEffect(() => {
    if (isError && error instanceof CustomError) {
      //request 함수에서 모든 에러를 CustomError로 통일함
      if (onError) {
        onError(error);
        return;
      }
      handleAppError(error);
      return;
    }

    if (data && onSuccess) {
      onSuccess(data);
    }
  }, [data, isError, error, onSuccess, onError]);
}
