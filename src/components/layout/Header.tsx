import { ROUTES } from '@/constants/routes';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './../shared/Logo';
import useGetUser from '@/features/auth/hooks/useGetUser';
import UserDropdown from '@/components/shared/UserDropdown';
import Button from '@/components/shared/Button';
import { IoMdArrowBack } from 'react-icons/io';
import { usePageStore } from '@/store/usePageStore';

const Header = () => {
  const title = usePageStore((state) => state.title);
  const { isSignedIn } = useGetUser();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="header-layout">
      {location.pathname === ROUTES.HOME ||
      location.pathname === ROUTES.SIGNIN ||
      location.pathname === ROUTES.SIGNUP ? (
        <Logo />
      ) : (
        <Button
          className="btn-icon"
          icon={<IoMdArrowBack className="text-2xl" />}
          onClick={() => navigate(-1)}
        />
      )}
      {isSignedIn ? (
        <>
          <p className="text-xl">{title}</p>
          <UserDropdown />
        </>
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
