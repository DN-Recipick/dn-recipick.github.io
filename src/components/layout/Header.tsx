import { ROUTES } from '@/constants/routes';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './../shared/Logo';
import useGetUser from '@/features/auth/hooks/useGetUser';
import UserDropdown from '@/components/shared/UserDropdown';
import Button from '@/components/shared/Button';
import { IoMdArrowBack } from 'react-icons/io';
import { usePageStore } from '@/store/usePageStore';
import clsx from 'clsx';

const Header = () => {
  const title = usePageStore((state) => state.title);
  const { isSignedIn } = useGetUser();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomeOrAuthPage =
    location.pathname === ROUTES.HOME ||
    location.pathname === ROUTES.SIGNIN ||
    location.pathname === ROUTES.SIGNUP;
  const isRecipesPage = location.pathname === ROUTES.RECIPES;

  return (
    <header
      className={clsx(
        'header-layout',
        !isHomeOrAuthPage && 'shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)]',
      )}
    >
      {isHomeOrAuthPage ? (
        <Logo />
      ) : (
        <Button
          className="btn-icon"
          icon={<IoMdArrowBack className="text-2xl" />}
          onClick={() => (isRecipesPage ? navigate(ROUTES.HOME) : navigate(-1))}
        />
      )}
      {isSignedIn ? (
        <>
          <p className="text-xl absolute left-1/2 -translate-x-1/2">{title}</p>
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
