import type { DropdownListProps } from '@/components/layout/Dropdown/DropdownList';
import Button from '@/components/shared/Button';
import useDropdown from '@/hooks/useDropdown';
import type { ReactElement, ReactNode } from 'react';

interface DropdownProps {
  buttonInner: string | ReactNode;
  dropdownList: (helpers: { setOpen: (v: boolean) => void }) => ReactElement<DropdownListProps>;
}

const Dropdown = ({ buttonInner, dropdownList }: DropdownProps) => {
  const { isOpen, setOpen, dropdownRef } = useDropdown<HTMLDivElement>();

  return (
    <div ref={dropdownRef} className="relative text-sm">
      <Button
        className="gap-2.5 capitalize btn-icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {buttonInner}
      </Button>

      {isOpen && dropdownList({ setOpen })}
    </div>
  );
};

export default Dropdown;
