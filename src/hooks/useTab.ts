import { useState } from 'react';

type UseTabReturn<T> = {
  selectedTab: T;
  setTab: (tab: T) => void;
  isSelected: (tab: T) => boolean;
};

export function useTab<T>(initialTab: T): UseTabReturn<T> {
  const [selectedTab, setSelectedTab] = useState<T>(initialTab);

  const setTab = (tab: T) => {
    setSelectedTab(tab);
  };

  const isSelected = (tab: T) => selectedTab === tab;

  return {
    selectedTab,
    setTab,
    isSelected,
  };
}
