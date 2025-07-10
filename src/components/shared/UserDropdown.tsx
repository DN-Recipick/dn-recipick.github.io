import Dropdown from '@/components/layout/Dropdown/Dropdown';
import DropdownItems from '@/components/layout/Dropdown/RenderDropdownItems';
import { USER_OPTIONS } from '@/constants/dropdownOptions';
import useGetUser from '@/features/auth/hooks/useGetUser';
import { useSignout } from '@/features/auth/hooks/useSignout';
import { FaUserAlt } from 'react-icons/fa';

const UserDropdown = () => {
  const { user, isPending } = useGetUser();
  const handleSignout = useSignout();
  return (
    <>
      {isPending ? (
        <div className="w-[1.875rem] h-[1.875rem] skeleton-bg rounded-full" />
      ) : (
        <Dropdown dropdownListClassName="right-0" icon={<FaUserAlt className="mini-icon-size" />}>
          <>
            <DropdownItems options={[{ text: `${user?.email} 님`, label: 'my' }]} />
            <DropdownItems options={USER_OPTIONS} onSelect={() => handleSignout()} />
          </>
        </Dropdown>
      )}
    </>
  );
};

export default UserDropdown;
