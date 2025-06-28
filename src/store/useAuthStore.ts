import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types/user';

interface AuthState {
  user: User | null;
  isSignin: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isSignin: false,
      setUser: (user) => set({ user, isSignin: true }),
      clearUser: () => set({ user: null, isSignin: false }),
    }),
    {
      name: 'auth-user', // localStorage에 저장될 key 이름
    },
  ),
);
