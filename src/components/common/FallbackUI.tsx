import type { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useFallbackStore } from '@/store/useFallbackStore';
import Button from '@/components/ui/Button';

const FallbackUI = ({ resetErrorBoundary }: FallbackProps) => {
  const { visible, message, rawMessage, status } = useFallbackStore();
  const navigate = useNavigate();

  const navigatePage = () => {
    resetErrorBoundary(); // ErrorBoundary 상태 초기화
    navigate('/'); // 홈으로 이동
  };

  if (!visible) return null;

  return (
    <div className="full-page-center">
      <h1>{status}</h1>
      <p>{message}</p>
      <p className="danger">{rawMessage}</p>
      <Button text="홈으로 돌아가기" onClick={navigatePage} className="btn-primary" />
    </div>
  );
};

export default FallbackUI;
