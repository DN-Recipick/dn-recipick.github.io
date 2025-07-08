import Header from '@/components/layout/Header';
import { useThemeStore } from '@/store/useThemeStore';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/shared/Modal';
import { useModalStore } from '@/store/useModalStore';
import { useFallbackStore } from '@/store/useFallbackStore';
import FallbackUI from '@/components/feedback/fallback/FullPageFallback';

function App() {
  const { visible } = useFallbackStore();
  const initTheme = useThemeStore((state) => state.initTheme);
  const { isOpen } = useModalStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      {visible && <FallbackUI />}
      <Header />
      <main className="flex-1 w-full px-content pb-24 pt-8">
        {/* React Router 자체적으로 에러를 감싸고 처리 (throw X) -> outlet 위에*/}
        <Outlet />
      </main>
      {isOpen && <Modal />}
      <Footer />
    </>
  );
}

export default App;
