import { useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import { ROUTES } from '@/constants/routes';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="full-page-center">
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다</p>
      <Button text={'홈 가기'} onClick={() => navigate(ROUTES.HOME)} className="btn-primary" />
    </div>
  );
}
