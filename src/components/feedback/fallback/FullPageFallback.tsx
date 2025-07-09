import type { FallbackProps } from 'react-error-boundary';
import { useFallbackStore } from '@/store/useFallbackStore';
import Button from '@/components/shared/Button';
import { ROUTES } from '@/constants/routes';
import { CustomError } from '@/lib/CustomError';
import { useNavigate } from 'react-router-dom';
//렌더링 오류는 상태로 관리하지 않는다
const FullPageFallback = (props?: Partial<FallbackProps>) => {
  const { visible, message, rawMessage, status, reset } = useFallbackStore();
  const navigate = useNavigate();

  const navigatePage = () => {
    reset();
    props?.resetErrorBoundary?.(); // ErrorBoundary 상태 초기화
    navigate(ROUTES.HOME);
  };

  if (!visible) return null;

  return (
    <div className="full-page-center">
      <h1>{status ?? 500}</h1>
      <p>{props?.error instanceof CustomError ? message : '렌더링 에러 발생'}</p>
      <p className="text-[var(--color-danger)] break-all">{rawMessage}</p>
      <Button text="홈으로 돌아가기" onClick={navigatePage} className="btn-primary" />
    </div>
  );
};

export default FullPageFallback;
