import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import GlobalErrorBoundary from '@/components/common/GlobalErrorBoundary.tsx';
import Home from '@/pages/Home.tsx';
import NotFound from '@/pages/NotFound.tsx';
import { customQueryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import Signin from '@/features/auth/pages/Signin.tsx';
import { ROUTES } from '@/constants/routes.ts';
import Signup from '@/features/auth/pages/Signup.tsx';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      // {
      //   path: '/fallback',
      //   element: (
      //     <FallbackUI
      //       error={new Error('임시 에러')}
      //       resetErrorBoundary={() => {
      //         console.log('에러 초기화');
      //       }}
      //     />
      //   ),
      // },
      { path: ROUTES.SIGNIN, element: <Signin /> },
      { path: ROUTES.SIGNUP, element: <Signup /> },
      { path: ROUTES.ALL, element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <QueryClientProvider client={customQueryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </GlobalErrorBoundary>
  </StrictMode>,
);
