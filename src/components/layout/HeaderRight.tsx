import Button from '@/components/shared/Button';
import { FaUserAlt } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { useSignout } from '@/features/auth/hooks/useSignout';

const HeaderRight = () => {
  const signout = useSignout();
  return (
    <div>
      <Button className="hover:bg-[var(--color-bg-hover)] rounded p-1.5">
        <FaUserAlt className="mini-icon-size" />
      </Button>

      <Button onClick={signout} className="hover:bg-[var(--color-bg-hover)] rounded p-1.5">
        <GoSignOut className="mini-icon-size" />
      </Button>
    </div>
  );
};

export default HeaderRight;
