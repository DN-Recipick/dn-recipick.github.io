import { ERROR_MESSAGES, DEFAULT_ERROR_MESSAGE } from '@/constants/messages';
import type { CustomError } from '@/types/api';
import type { ErrorStatusCode } from '@/types/error';

export function createCustomError(status: ErrorStatusCode, rawMessage?: string): CustomError {
  return {
    status,
    message: ERROR_MESSAGES[status] || DEFAULT_ERROR_MESSAGE,
    rawMessage,
  };
}
