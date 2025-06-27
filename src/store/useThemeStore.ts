import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '@/types/ui';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  initTheme: () => void;
}

const applyThemeToDOM = (theme: Theme) => {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.toggle('dark', isDark);
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',

      setTheme: (theme) => {
        set({ theme });
        applyThemeToDOM(theme);
      },

      initTheme: () => {
        const { theme } = get();
        applyThemeToDOM(theme);
      },
    }),
    {
      name: 'theme-preference',
    },
  ),
);
