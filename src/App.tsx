import Header from '@/components/layout/Header';
import { useThemeStore } from '@/store/useThemeStore';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/layout/Footer';

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      <Header />
      <main className="flex-1 w-full px-content py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
