import { useThemeStore } from '@/store/useThemeStore';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Modal from '@/components/shared/Modal';
import { useModalStore } from '@/store/useModalStore';
import FullPageFallback from '@/components/feedback/fallback/FullPageFallback';
import Header from '@/components/layout/Header';

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);
  const { isOpen } = useModalStore();
  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      <FullPageFallback />
      <Header />
      <Outlet />
      {isOpen && <Modal />}
      {/* <Footer /> */}
    </>
  );
}

export default App;
