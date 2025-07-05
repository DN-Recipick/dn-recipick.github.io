import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
  initTheme: () => void;
}

const applyThemeToDOM = (theme: string) => {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.toggle('dark', isDark);
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',

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
