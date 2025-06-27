import type { ErrorStatusCode } from '@/types/error';
import { create } from 'zustand';

export const useFallbackStore = create<{
  visible: boolean;
  message: string;
  rawMessage?: string;
  status?: ErrorStatusCode;
  show: (message: string, rawMessage?: string, status?: ErrorStatusCode) => void;
}>((set) => ({
  visible: false,
  message: '',
  rawMessage: undefined,
  status: undefined,
  show: (message, rawMessage, status) => set({ visible: true, message, rawMessage, status }),
}));
