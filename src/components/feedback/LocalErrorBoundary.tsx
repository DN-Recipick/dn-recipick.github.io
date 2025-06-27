import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

const LocalErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary fallback={<p className="text-red-500">오류가 발생했습니다.</p>}>
      <Suspense fallback={<p>로딩 중...</p>}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default LocalErrorBoundary;
