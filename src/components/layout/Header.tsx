import { ROUTES } from '@/constants/routes';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import Dropdown from '@/components/layout/Dropdown/Dropdown';
import { USER_OPTIONS } from '@/constants/dropdownOptions';
import { FaUserAlt } from 'react-icons/fa';
import { useSignout } from '@/features/auth/hooks/useSignout';
import DropdownItems from '@/components/layout/Dropdown/RenderDropdownItems';
import Logo from './../shared/Logo';

const Header = () => {
  const { isSignin, user } = useAuthStore();
  const handleSignout = useSignout();

  return (
    <header className="w-full p-content flex-center-between z-30">
      <Logo />
      {isSignin ? (
        <Dropdown dropdownListClassName="right-0" icon={<FaUserAlt className="mini-icon-size" />}>
          <DropdownItems options={[{ text: `${user?.email} 님`, label: 'my' }]} />
          <DropdownItems options={USER_OPTIONS} onSelect={() => handleSignout()} />
        </Dropdown>
      ) : (
        <div className="flex-center gap-2 text-[0.7rem] sm:text-[0.875rem]">
          <NavLink
            to={ROUTES.SIGNIN}
            className={({ isActive }) => (isActive ? 'text-[var(--color-primary)]' : '')}
          >
            로그인
          </NavLink>
          <span className="text-gray-400">|</span>
          <NavLink
            to={ROUTES.SIGNUP}
            className={({ isActive }) => (isActive ? 'text-[var(--color-primary)]' : '')}
          >
            회원가입
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
