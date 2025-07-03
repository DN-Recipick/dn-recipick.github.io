import { LuSun, LuMoon, LuMonitor } from 'react-icons/lu';
import React from 'react';
import { useSignout } from '@/features/auth/hooks/useSignout';

export type DropdownOptions = {
  text: string;
  label: string;
  icon?: React.ReactNode;
};
export const THEME_OPTIONS: DropdownOptions[] = [
  {
    text: 'Light',
    label: 'light',
    icon: <LuSun className={'mini-icon-size fill-yellow-400'} />,
  },
  {
    text: 'Dark',
    label: 'dark',
    icon: <LuMoon className={'mini-icon-size fill-neutral-500'} />,
  },
  {
    text: 'System',
    label: 'system',
    icon: <LuMonitor className={'mini-icon-size not-first:fill-slate-500'} />,
  },
];

export const USER_OPTIONS: DropdownOptions[] = [
  {
    text: '로그아웃',
    label: 'sign-out',
  },
];
