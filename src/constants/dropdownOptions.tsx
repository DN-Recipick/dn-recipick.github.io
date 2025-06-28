import { LuSun, LuMoon, LuMonitor } from 'react-icons/lu';
import React from 'react';

export type DropdownOptions = {
  text: string;
  icon?: React.ReactNode;
  [key: string]: unknown;
};

export const THEME_OPTIONS: DropdownOptions[] = [
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

export const USER_OPTIONS: DropdownOptions[] = [
  {
    text: '내정보',
  },
  {
    text: '로그아웃',
  },
];
