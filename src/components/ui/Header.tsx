import Button from '@/components/ui/Button';
import ThemeDropdown from '@/components/ui/ThemeDropdown';
import { ROUTES } from '@/constants/routes';
import { useSignout } from '@/features/auth/hooks/useSignout';
import { useNavigate } from 'react-router-dom';
import { GoSignOut, GoSignIn, GoPersonAdd } from 'react-icons/go';

const Header = () => {
  const navigate = useNavigate();
  const signout = useSignout();
  return (
    <header className="w-full p-content flex-center-between z-30">
      <span className="text-3xl cursor-pointer" onClick={() => navigate(ROUTES.HOME)}>
        Logo
      </span>
      <div className="flex-center gap-2">
        <ThemeDropdown />
        <Button onClick={signout} className="bg-hover rounded p-1.5">
          <GoSignOut className="mini-icon-size" />
        </Button>
        <Button onClick={() => navigate(ROUTES.SIGNIN)} className="bg-hover rounded p-1.5">
          <GoSignIn className="mini-icon-size" />
        </Button>
        <Button onClick={() => navigate(ROUTES.SIGNUP)} className="bg-hover rounded p-1.5">
          <GoPersonAdd className="mini-icon-size" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
