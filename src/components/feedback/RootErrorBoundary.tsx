import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackUI from './FallbackUI';
import FullScreenLoader from './FullScreenLoader';

export const RootErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <Suspense fallback={<FullScreenLoader />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
