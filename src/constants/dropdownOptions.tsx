import { LuSun, LuMoon, LuMonitor } from 'react-icons/lu';
import React from 'react';
import type { Theme } from '@/types/ui';

export type ThemeOptions = {
  text: Theme;
  icon: React.ReactNode;
};

export const THEME_OPTIONS: ThemeOptions[] = [
  {
    text: 'light',
    icon: <LuSun className={'mini-icon-size fill-yellow-400'} />,
  },
  {
    text: 'dark',
    icon: <LuMoon className={'mini-icon-size fill-neutral-500'} />,
  },
  {
    text: 'system',
    icon: <LuMonitor className={'mini-icon-size not-first:fill-slate-500'} />,
  },
];
