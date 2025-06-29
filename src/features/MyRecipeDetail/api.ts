import { ENDPOINTS } from '@/constants/endPoints';
import httpClient from '@/lib/httpClient';
import type { KurlyItemResponse } from '@/types/kurly';
import { getAuthHeaders } from '@/utils/auth';

export const getKurlyItems = (keyword: string): Promise<KurlyItemResponse> =>
  httpClient.get(ENDPOINTS.INGREDIENT, {
    queryParams: { keyword },
    headers: getAuthHeaders(),
  });
