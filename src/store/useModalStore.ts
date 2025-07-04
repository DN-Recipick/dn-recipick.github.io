import { create } from 'zustand';

export type ModalType = 'ingredient' | 'relatedRecipes' | null;

interface ModalData {
  title: string;
  [key: string]: unknown;
}

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  data: ModalData | null;
  open: (type: ModalType, data?: ModalData | null) => void;
  close: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  data: null,
  open: (type, data = null) => set({ isOpen: true, type, data }),
  close: () => set({ isOpen: false, type: null, data: null }),
}));
