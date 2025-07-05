import Button from '@/components/shared/Button';
import useDropdown from '@/hooks/useDropdown';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface DropdownProps {
  icon?: ReactNode;
  text?: string;
  children: ReactNode;
  dropdownListClassName?: string;
}

const Dropdown = ({
  icon,
  children: dropdownListChildren,
  dropdownListClassName,
}: DropdownProps) => {
  const { isOpen, setOpen, dropdownRef } = useDropdown<HTMLDivElement>();

  return (
    <div ref={dropdownRef} className="relative text-sm">
      <Button
        className="gap-2.5 btn-icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        icon={icon}
      />
      {isOpen && (
        <ul className={clsx(dropdownListClassName, 'dropdown-list')}>{dropdownListChildren}</ul>
      )}
    </div>
  );
};

export default Dropdown;
