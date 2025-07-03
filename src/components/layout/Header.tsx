import { ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import Button from '@/components/shared/Button';
import Dropdown from '@/components/layout/Dropdown/Dropdown';
import { USER_OPTIONS } from '@/constants/dropdownOptions';
import { FaUserAlt } from 'react-icons/fa';
import { useSignout } from '@/features/auth/hooks/useSignout';
import DropdownItems from '@/components/layout/Dropdown/RenderDropdownItems';
import Logo from './../shared/Logo';

const Header = () => {
  const { isSignin, user } = useAuthStore();
  const navigate = useNavigate();
  const handleSignout = useSignout();

  return (
    <header className="w-full p-content flex-center-between z-30">
      <Logo />
      {isSignin ? (
        <Dropdown dropdownListClassName="right-0" buttonInner={<FaUserAlt />}>
          <DropdownItems options={[{ text: `${user?.email}님`, label: 'my' }]} />
          <DropdownItems options={USER_OPTIONS} onSelect={() => handleSignout()} />
        </Dropdown>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => navigate(ROUTES.SIGNIN)} className="btn-primary" text="로그인" />
          <Button onClick={() => navigate(ROUTES.SIGNUP)} className="btn-primary" text="회원가입" />
        </div>
      )}
    </header>
  );
};

export default Header;
