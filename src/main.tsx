import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import {
  ErrorBoundary as RootErrorBoundary,
  ErrorBoundary as AppErrorBoundary,
} from 'react-error-boundary';
import Home from '@/pages/Home.tsx';
import NotFound from '@/pages/NotFound.tsx';
import { customQueryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import Signin from '@/features/auth/pages/Signin.tsx';
import { ROUTES } from '@/constants/routes.ts';
import Signup from '@/features/auth/pages/Signup.tsx';
import MyRecipes from '@/features/MyRecipes/pages/MyRecipes.tsx';
import RecipeDetail from './features/MyRecipeDetail/pages/RecipeDetail.tsx';
import FullPageFallback from '@/components/feedback/fallback/FullPageFallback.tsx';
import SharedRecipeFallback from '@/components/feedback/fallback/SharedRecipeFallback.tsx';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <AppErrorBoundary FallbackComponent={FullPageFallback}>
        <App />
      </AppErrorBoundary>
    ),
    children: [
      { path: '', element: <Home /> },
      { path: ROUTES.RECIPES, element: <MyRecipes /> },
      { path: ROUTES.SHARED_RECIPE, element: <SharedRecipeFallback /> },
      { path: ROUTES.RECIPE_PATH, element: <RecipeDetail /> },
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
      { path: ROUTES.NOT_FOUND, element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootErrorBoundary FallbackComponent={FullPageFallback}>
      <QueryClientProvider client={customQueryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </RootErrorBoundary>
  </StrictMode>,
);
