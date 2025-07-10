import { create } from 'zustand';

interface PageStore {
  title: string;
  setTitle: (title: string) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  title: '',
  setTitle: (title) => set({ title }),
}));
