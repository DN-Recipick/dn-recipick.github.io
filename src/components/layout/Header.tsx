import { ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/logo.svg';
import Image from '@/components/shared/Image';
import { useAuthStore } from '@/store/useAuthStore';
import Button from '@/components/shared/Button';
import Dropdown from '@/components/layout/Dropdown/Dropdown';
import { USER_OPTIONS } from '@/constants/dropdownOptions';
import { useThemeStore } from '@/store/useThemeStore';
import { FaUserAlt } from 'react-icons/fa';
import DropdownList from '@/components/layout/Dropdown/DropdownList';
import { useSignout } from '@/features/auth/hooks/useSignout';
import DropdownItems from '@/components/layout/Dropdown/RenderDropdownItems';

const Header = () => {
  const { isSignin } = useAuthStore();
  const navigate = useNavigate();
  const handleSignout = useSignout();

  return (
    <header className="w-full p-content flex-center-between z-30">
      <Image src={Logo} onClick={() => navigate(ROUTES.HOME)} wrapClassName="w-12 cursor-pointer" />
      {isSignin ? (
        <Dropdown
          buttonInner={<FaUserAlt />}
          dropdownList={({ setOpen }) => (
            <DropdownList className="right-0">
              <DropdownItems
                options={USER_OPTIONS}
                setOpen={setOpen}
                onSelect={(option) => {
                  if (option.text === '로그아웃') handleSignout();
                }}
              />
            </DropdownList>
          )}
        />
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
