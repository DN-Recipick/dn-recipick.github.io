import React, { useEffect } from 'react';
import { usePageStore } from '@/store/usePageStore';

const PageLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const setTitle = usePageStore((state) => state.setTitle);

  useEffect(() => {
    setTitle(title);
    return () => setTitle('');
  }, [title, setTitle]);

  return <main className="pt-[6.5rem] pb-10 w-full flex-1">{children}</main>;
};

export default PageLayout;
