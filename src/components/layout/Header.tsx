import Button from '@/components/shared/Button';
import ThemeDropdown from '@/components/layout/ThemeDropdown';
import { ROUTES } from '@/constants/routes';
import { useSignout } from '@/features/auth/hooks/useSignout';
import { useNavigate } from 'react-router-dom';
import { GoSignOut, GoSignIn, GoPersonAdd } from 'react-icons/go';
import Logo from '@/assets/logo.svg';
import Image from '@/components/shared/Image';

const Header = () => {
  const navigate = useNavigate();
  const signout = useSignout();
  return (
    <header className="w-full p-content flex-center-between z-30">
      <Image src={Logo} onClick={() => navigate(ROUTES.HOME)} wrapClassName="w-12 cursor-pointer" />
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
